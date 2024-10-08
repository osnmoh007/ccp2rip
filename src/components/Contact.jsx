import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact({ isDarkMode }) {
  const { t } = useTranslation();

  const handleContactSupport = () => {
    window.location.href = `mailto:admin@mohamedmaamir.com?subject=CCP Calculator Support`;
  };

  return (
    <section id="contact" className="mb-20">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('contact.title')}</h2>
      <p className={`text-sm md:text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.description')}</p>
      <button 
        onClick={handleContactSupport}
        className={`text-sm md:text-base font-bold py-2 px-4 rounded-md transition-colors duration-200 flex items-center ${
          isDarkMode
            ? 'bg-white text-gray-900 hover:bg-gray-200'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        {t('contact.button')}
      </button>
    </section>
  );
}

export default Contact;