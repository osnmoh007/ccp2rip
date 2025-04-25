import React from 'react';
import { useTranslation } from 'react-i18next';

function Features({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <section id="features" className="mb-32 mt-16"> {/* Added top margin */}
      <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('features.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <svg className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 3h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
          </svg>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('features.instantCalculation')}</h3>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{t('features.instantCalculationDesc')}</p>
        </div>
        <div className="text-center">
          <svg className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('features.secureProcessing')}</h3>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{t('features.secureProcessingDesc')}</p>
        </div>
        <div className="text-center">
          <svg className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 5.41V21h-2V5.41L5.41 11 4 9.59 12 1.59l8 8L18.59 11 13 5.41z"/>
          </svg>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('features.easyToUse')}</h3>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{t('features.easyToUseDesc')}</p>
        </div>
        <div className="text-center">
          <svg className={`w-12 h-12 mx-auto mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('features.telegramBot')}</h3>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{t('features.telegramBotDesc')}</p>
        </div>
      </div>
    </section>
  );
}

export default Features;