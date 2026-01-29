import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/quality', label: 'Quality' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-800 hover:bg-gray-800 text-white py-1.5 sm:py-1 px-4 text-xs sm:text-sm relative z-[9999]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
              <a href="tel:+244941475798" className="hover:underline whitespace-nowrap">+244 941475798</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
              <a href="mailto:info@aisco.com.co" className="hover:underline notranslate text-xs sm:text-sm break-all sm:break-normal">info@aisco.com.co</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={14} />
              <span className="notranslate">Muceque Cabele, Comuna Da Barra Do Dande, Municipio Do Dande, Provincia Do Benga, Angola.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 max-w-[60%] sm:max-w-none">
              <Link to="/" className="transition-transform duration-300 hover:scale-105 block">
                <img 
                  src="/Angola Logo.png" 
                  alt="AISCO Logo" 
                  className="h-10 sm:h-12 lg:h-16 w-auto max-w-full object-contain"
                  loading="eager"
                  fetchpriority="high"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                    isActive(item.path) 
                      ? 'text-[#0890C6]' 
                      : 'text-gray-700 hover:text-[#0890C6]'
                  }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0890C6] transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Language Switcher and Request Quote Button */}
            <div className="hidden lg:flex items-center gap-4 relative z-[9999]">
              <LanguageSwitcher />
              <Link 
                to="/request-quote"
                className="relative bg-gradient-to-r from-[#0890C6] to-blue-600 text-white px-6 py-3 rounded-lg hover:from-[#0890C6]/90 hover:to-blue-700 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg group overflow-hidden"
              >
                <span className="relative z-10">Request Quote</span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative flex-shrink-0 z-50 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-[#0890C6] bg-blue-50 font-semibold border-l-4 border-[#0890C6]' 
                      : 'text-gray-700 hover:text-[#0890C6] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 pb-3 border-t border-gray-200 mt-2 relative z-[9999]">
                <div className="px-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-3 pb-2 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600 px-4">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <a href="tel:+244941475798" className="hover:text-[#0890C6]">+244 941475798</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <a href="mailto:info@aisco.com.co" className="hover:text-[#0890C6] notranslate">info@aisco.com.co</a>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/request-quote"
                className="block w-full bg-gradient-to-r from-[#0890C6] to-blue-600 text-white px-6 py-3 rounded-lg hover:from-[#0890C6]/90 hover:to-blue-700 transition-all duration-300 font-medium mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;