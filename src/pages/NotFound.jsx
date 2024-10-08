import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>404</h1>
      <p className={`text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {t('notFound.message')}
      </p>
      <Link
        to="/"
        className={`px-6 py-3 text-lg font-semibold rounded-md transition-colors duration-200 ${
          isDarkMode
            ? 'bg-white text-gray-900 hover:bg-gray-200'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}

export default NotFound;