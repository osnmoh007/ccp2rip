import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import CCPCalculator from './components/CCPCalculator'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Footer from './components/Footer'

function Header({ isDarkMode, toggleTheme }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={`py-4 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img src="/logo.svg" alt="CCP Calculator Logo" className="w-8 h-8 mr-2" />
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('title')}</h1>
          </Link>
        </div>
        {isMobile ? (
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <svg
                className="w-6 h-6"
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
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        ) : (
          <nav className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              {isHomePage ? (
                <>
                  <li><a href="#features" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.features')}</a></li>
                  <li><a href="#howItWorks" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.howItWorks')}</a></li>
                  <li><a href="#contact" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.contact')}</a></li>
                </>
              ) : (
                <>
                  <li><Link to="/#features" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.features')}</Link></li>
                  <li><Link to="/#howItWorks" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.howItWorks')}</Link></li>
                  <li><Link to="/#contact" className={`hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.contact')}</Link></li>
                </>
              )}
            </ul>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </nav>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <nav className={`mt-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <ul className="space-y-2">
            {isHomePage ? (
              <>
                <li><a href="#features" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.features')}</a></li>
                <li><a href="#howItWorks" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.howItWorks')}</a></li>
                <li><a href="#contact" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.contact')}</a></li>
              </>
            ) : (
              <>
                <li><Link to="/#features" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.features')}</Link></li>
                <li><Link to="/#howItWorks" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.howItWorks')}</Link></li>
                <li><Link to="/#contact" onClick={closeMenu} className={`block py-2 px-4 hover:bg-gray-700 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('nav.contact')}</Link></li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow container mx-auto py-12 px-4">
          <Routes>
            <Route path="/" element={
              <>
                <CCPCalculator isDarkMode={isDarkMode} />
                <Features isDarkMode={isDarkMode} />
                <HowItWorks isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
              </>
            } />
            <Route path="/terms" element={<TermsOfService isDarkMode={isDarkMode} />} />
            <Route path="/privacy" element={<PrivacyPolicy isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;