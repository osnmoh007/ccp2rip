import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <footer className={`py-6 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className={`mb-4 md:mb-0 text-center md:text-left ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link 
              to="/terms" 
              className={`text-center hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {t('footer.terms')}
            </Link>
            <Link 
              to="/privacy" 
              className={`text-center hover:text-blue-300 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;