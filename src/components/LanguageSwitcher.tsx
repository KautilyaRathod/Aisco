import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, X } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface LanguageSwitcherProps {
  variant?: 'default' | 'dark';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize with language from cookie immediately
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith('googtrans=')) {
          const value = trimmed.substring('googtrans='.length);
          if (value && (value.includes('/pt') || value === '/en/pt')) {
            return 'pt';
          }
        }
      }
    } catch (error) {
      // Fallback to English on error
    }
    return 'en';
  });
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Function to get language from cookie
  const getLanguageFromCookie = () => {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith('googtrans=')) {
          // Read cookie value directly (don't decode - Google Translate uses raw format)
          const value = trimmed.substring('googtrans='.length);
          // Google Translate cookie format: /en/pt or /en/en
          if (value && (value.includes('/pt') || value === '/en/pt')) {
            return 'pt';
          }
          return 'en';
        }
      }
    } catch (error) {
      console.error('Error reading language cookie:', error);
    }
    return 'en';
  };

  // Function to apply translation smoothly without errors
  const applyTranslation = (lang: string) => {
    if (lang !== 'pt') return; // Only handle Portuguese translation
    
    const triggerTranslation = () => {
      try {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (!select) return false; // Select not ready yet
        
        // Only update if value is different
        if (select.value !== 'pt') {
          select.value = 'pt';
        } else {
          return true; // Already set to Portuguese
        }
        
        // Trigger change event for Google Translate
        try {
          const changeEvent = new Event('change', { bubbles: true, cancelable: true });
          select.dispatchEvent(changeEvent);
          
          // Try Google Translate's internal change handler safely
          if (typeof select.onchange === 'function') {
            try {
              select.onchange(changeEvent as any);
            } catch (err) {
              // Silently handle onchange errors
            }
          }
          
          return true; // Successfully triggered
        } catch (error) {
          // Silently handle event errors
          return false;
        }
      } catch (error) {
        // Silently handle all errors
        return false;
      }
    };

    // Try translation with proper timing
    if (window.google && window.google.translate) {
      // Google Translate is loaded, try immediately and with delays
      const attempts = [100, 300, 600];
      attempts.forEach(delay => {
        setTimeout(() => {
          triggerTranslation();
        }, delay);
      });
    } else {
      // Wait for Google Translate to load
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      
      let attemptsCount = 0;
      const maxAttempts = 50; // 5 seconds max (50 * 100ms)
      
      checkIntervalRef.current = setInterval(() => {
        attemptsCount++;
        
        if (window.google && window.google.translate) {
          // Google Translate loaded, try translation
          const success = triggerTranslation();
          
          // Also try with slight delays
          if (success) {
            setTimeout(() => triggerTranslation(), 200);
            setTimeout(() => triggerTranslation(), 500);
          }
          
          // Clear interval once translation is attempted
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
            checkIntervalRef.current = null;
          }
        } else if (attemptsCount >= maxAttempts) {
          // Stop after max attempts
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
            checkIntervalRef.current = null;
          }
        }
      }, 100);
    }
  };

  // Initialize language on mount and route changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initLanguage = () => {
      try {
        // Read language from cookie
        const detectedLang = getLanguageFromCookie();
        setCurrentLanguage(detectedLang);

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', detectedLang);

        // Ensure root element allows translation (remove notranslate if present)
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.classList.remove('notranslate');
        }

        // Apply translation based on cookie
        if (detectedLang === 'pt') {
          // Apply translation with delays to ensure React has rendered and content is ready
          setTimeout(() => {
            applyTranslation(detectedLang);
          }, 200);
          
          // Additional attempts to ensure translation is applied to all content
          setTimeout(() => {
            applyTranslation(detectedLang);
          }, 1000);
          
          setTimeout(() => {
            applyTranslation(detectedLang);
          }, 2000);
        } else {
          // If English is selected, ensure we're not translating
          // Google Translate will handle this automatically via cookie
          if (rootElement) {
            rootElement.classList.remove('notranslate');
          }
        }
      } catch (error) {
        // Silently handle initialization errors
        console.debug('Language initialization:', error);
      }
    };

    // Run initialization immediately
    initLanguage();

    // Also check periodically to ensure language state stays in sync with cookie
    const syncInterval = setInterval(() => {
      const detectedLang = getLanguageFromCookie();
      setCurrentLanguage(prevLang => {
        if (detectedLang !== prevLang) {
          return detectedLang;
        }
        return prevLang;
      });
    }, 500);

    // Cleanup function
    return () => {
      clearInterval(syncInterval);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, [location.pathname]); // Re-run when route changes

  useEffect(() => {
    // Update HTML lang attribute when language changes
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage]);

  const handleLanguageChange = (lang: string) => {
    setIsOpen(false);
    
    // Update state immediately for UI feedback
    setCurrentLanguage(lang);
    
    // Set cookie for Google Translate (proper format - do NOT encode the value)
    const cookieName = 'googtrans';
    // Google Translate expects format: /en/pt for Portuguese, /en/en for English
    // IMPORTANT: Do not URL encode - Google Translate reads the raw cookie value
    const cookieValue = lang === 'en' ? '/en/en' : '/en/pt';
    
    // Clear any existing cookie first to ensure clean state
    document.cookie = `${cookieName}=; path=/; max-age=0; SameSite=Lax`;
    
    // Set new cookie without encoding (Google Translate expects raw format)
    document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Verify cookie was set
    console.log('Language changed to:', lang);
    console.log('Cookie set to:', cookieValue);
    
    // Always reload page for reliable translation
    // This prevents React/Google Translate DOM conflicts
    // Small delay to ensure cookie is persisted
    setTimeout(() => {
      // Force a hard reload to ensure Google Translate re-initializes properly
      window.location.href = window.location.href.split('#')[0];
    }, 150);
  };

  const getLanguageLabel = (code: string) => {
    return code === 'en' ? 'EN' : 'PT';
  };

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '/english.svg'
    },
    {
      code: 'pt',
      name: 'Portugal',
      flag: '/portugal.svg'
    }
  ];

  return (
    <div className="relative z-[9999]">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors text-xs font-medium relative z-[9999] ${
          variant === 'dark'
            ? 'hover:bg-gray-700 text-gray-200 hover:text-white'
            : 'hover:bg-gray-100 text-gray-700 hover:text-[#0890C6]'
        }`}
        aria-label="Change language"
      >
        <Globe size={14} />
        <span className="hidden sm:inline">
          {getLanguageLabel(currentLanguage)}
        </span>
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] overflow-hidden language-modal">
            <div className="p-2 bg-white">
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-white">
                <span className="text-sm font-semibold text-black notranslate">Select Language</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 no-hover"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="py-1 bg-white">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm no-hover transition-colors notranslate ${
                      currentLanguage === lang.code
                        ? 'bg-blue-50 border-l-4 border-[#0890C6] font-medium language-selected'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="font-medium notranslate" 
                        style={{ 
                          display: 'inline-block', 
                          visibility: 'visible', 
                          opacity: 1,
                          color: 'black'
                        }}
                      >
                        {lang.name}
                      </span>
                      {currentLanguage === lang.code && (
                        <span className="text-[#0890C6] text-lg font-bold">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

