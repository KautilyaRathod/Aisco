import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Smooth translation initialization
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.classList.add('notranslate');
  
  // Function to safely apply Portuguese translation
  const applyPortugueseTranslation = () => {
    try {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        // Only apply if not already set
        if (select.value !== 'pt') {
          select.value = 'pt';
          
          // Create and dispatch change event
          const changeEvent = new Event('change', { bubbles: true, cancelable: true });
          select.dispatchEvent(changeEvent);
          
          // Try Google Translate's internal handler if available
          if (typeof select.onchange === 'function') {
            try {
              select.onchange(changeEvent as any);
            } catch (err) {
              // Silently handle if onchange throws error
            }
          }
          
          return true; // Successfully applied
        }
        return true; // Already set to Portuguese
      }
    } catch (error) {
      // Silently handle errors during translation
      console.debug('Translation application:', error);
    }
    return false; // Not applied yet
  };

  // Function to check cookie and apply translation
  const checkAndApplyTranslation = () => {
    try {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith('googtrans=')) {
          const value = trimmed.substring('googtrans='.length);
          if (value && (value.includes('/pt') || value === '/en/pt')) {
            // Portuguese is selected
            return applyPortugueseTranslation();
          }
        }
      }
    } catch (e) {
      // Ignore cookie reading errors
    }
    return false;
  };

  // Remove notranslate after React has rendered to allow full page translation
  setTimeout(() => {
    if (rootElement) {
      // Remove notranslate class from root to allow Google Translate to translate ALL page content
      // Individual elements with notranslate (emails, addresses, language UI) will remain untranslated
      rootElement.classList.remove('notranslate');
    }
    
    // Try to apply translation with multiple attempts to ensure entire page is translated
    const attemptTranslation = () => {
      const applied = checkAndApplyTranslation();
      if (!applied && window.google && window.google.translate) {
        // If Google Translate is loaded but select not ready, try again
        setTimeout(() => checkAndApplyTranslation(), 300);
      }
    };

    // Initial attempts after delays to catch content at different render stages
    setTimeout(attemptTranslation, 800);
    setTimeout(attemptTranslation, 1500);
    setTimeout(attemptTranslation, 2500);
    
    // Final attempt after longer delay to ensure all dynamically loaded content is translated
    setTimeout(() => {
      if (rootElement) {
        // Ensure root is still translatable
        rootElement.classList.remove('notranslate');
        checkAndApplyTranslation();
      }
    }, 3500);
  }, 1500);
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
