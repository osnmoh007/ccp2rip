import React from 'react';
import { useTranslation } from 'react-i18next';

function BotPromotion({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className={`mt-16 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="80" 
            viewBox="0 0 24 24"
            className={isDarkMode ? 'text-blue-400' : 'text-blue-500'}
            fill="currentColor"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.294 0-.531-.224-.531-.5v-1c0-.276.237-.5.531-.5h10.288c.293 0 .531.224.531.5v1c0 .276-.238.5-.531.5zm0-4h-10.288c-.294 0-.531-.224-.531-.5v-1c0-.276.237-.5.531-.5h10.288c.293 0 .531.224.531.5v1c0 .276-.238.5-.531.5zm0-4h-10.288c-.294 0-.531-.224-.531-.5v-1c0-.276.237-.5.531-.5h10.288c.293 0 .531.224.531.5v1c0 .276-.238.5-.531.5z"/>
          </svg>
        </div>
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('botPromotion.title')}
          </h3>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('botPromotion.description')}
          </p>
          <a 
            href="https://t.me/ccp2ripbot" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-block px-6 py-3 rounded-md font-bold transition-colors duration-200 ${
              isDarkMode
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {t('botPromotion.openTelegram')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BotPromotion; 