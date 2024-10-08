import React from 'react';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className={`max-w-3xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-6">{t('privacyPolicy.title')}</h1>
      <p className="mb-4">{t('privacyPolicy.lastUpdated')}</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacyPolicy.section1.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section1.content')}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacyPolicy.section2.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section2.content')}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacyPolicy.section3.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section3.content')}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacyPolicy.section4.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section4.content')}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacyPolicy.section5.title')}</h2>
      <p className="mb-4">{t('privacyPolicy.section5.content')}</p>
    </div>
  );
}

export default PrivacyPolicy;