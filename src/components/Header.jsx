import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

function Header({ isDarkMode, toggleTheme }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const menuItemClass = `text-lg ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`;
  const mobileMenuItemClass = `w-full text-center py-4 ${menuItemClass}`;

  return (
    <header className={`py-4 md:py-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="CCP Calculator Logo" className="h-10 w-10 md:h-12 md:w-12 mr-2 md:mr-3" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 justify-center flex-grow">
            <button onClick={() => handleNavigation('features')} className={menuItemClass}>
              {t('nav.features')}
            </button>
            <button onClick={() => handleNavigation('howItWorks')} className={menuItemClass}>
              {t('nav.howItWorks')}
            </button>
            <button onClick={() => handleNavigation('contact')} className={menuItemClass}>
              {t('nav.contact')}
            </button>
            <Link to="/about" className={menuItemClass}>
              {t('nav.about')}
            </Link>
            <Link to="/terms" className={menuItemClass}>
              {t('nav.terms')}
            </Link>
            <Link to="/privacy" className={menuItemClass}>
              {t('nav.privacy')}
            </Link>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="https://github.com/osnmoh007/ccp2rip"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="GitHub Repository"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <LanguageSelector />
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 md:w-8 md:h-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col items-center">
              <button
                onClick={() => handleNavigation('features')}
                className={mobileMenuItemClass}
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => handleNavigation('howItWorks')}
                className={mobileMenuItemClass}
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className={mobileMenuItemClass}
              >
                {t('nav.contact')}
              </button>
              <Link
                to="/about"
                className={mobileMenuItemClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/terms"
                className={mobileMenuItemClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.terms')}
              </Link>
              <Link
                to="/privacy"
                className={mobileMenuItemClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.privacy')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;