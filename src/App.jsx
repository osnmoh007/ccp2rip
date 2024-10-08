import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import CCPCalculator from './components/CCPCalculator'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Header from './components/Header'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = i18n.language === 'ar' ? 'font-el-messiri' : '';
  }, [i18n.language]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ScrollToSection />
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className={`flex-grow container mx-auto px-4 py-12 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
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
            <Route path="/about" element={<AboutMe isDarkMode={isDarkMode} />} />
            <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
        <BackToTop isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;