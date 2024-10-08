import React from 'react';
import { useTranslation } from 'react-i18next';

function HowItWorks({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <section id="howItWorks" className="mb-20">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('howItWorks.title')}</h2>
      <ol className={`list-decimal pl-6 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <li className="mb-4">{t('howItWorks.step1')}</li>
        <li className="mb-4">{t('howItWorks.step2')}</li>
        <li className="mb-4">{t('howItWorks.step3')}</li>
        <li className="mb-4">{t('howItWorks.step4')}</li>
        <li>{t('howItWorks.step5')}</li>
      </ol>
    </section>
  );
}

export default HowItWorks;