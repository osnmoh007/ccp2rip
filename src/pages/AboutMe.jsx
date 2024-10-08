import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <div className={`max-w-3xl mx-auto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Mohamed Salah Maamir</h1>
        <p className="text-xl italic">{t('aboutMe.jobTitle')}</p>
      </div>

      <div className="space-y-6">
        <p className="text-lg">{t('aboutMe.intro')}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('aboutMe.whatImDoing')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('aboutMe.webDesign')}</h3>
              <p>{t('aboutMe.webDesignDesc')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('aboutMe.webDevelopment')}</h3>
              <p>{t('aboutMe.webDevelopmentDesc')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('aboutMe.civilEngineering')}</h3>
              <p>{t('aboutMe.civilEngineeringDesc')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('aboutMe.skills')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('aboutMe.civilEngineeringSkills')}</h3>
              <ul className="list-disc pl-5">
                <li>{t('aboutMe.structuralAnalysis')}</li>
                <li>{t('aboutMe.concreteDesign')}</li>
                <li>{t('aboutMe.cad')}</li>
                <li>{t('aboutMe.projectManagement')}</li>
                <li>{t('aboutMe.numericalAnalysis')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('aboutMe.itSkills')}</h3>
              <ul className="list-disc pl-5">
                <li>{t('aboutMe.html')}</li>
                <li>{t('aboutMe.css')}</li>
                <li>{t('aboutMe.javascript')}</li>
                <li>{t('aboutMe.php')}</li>
                <li>{t('aboutMe.wordpress')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('aboutMe.languages')}</h2>
          <ul className="list-disc pl-5">
            <li>{t('aboutMe.arabic')}</li>
            <li>{t('aboutMe.french')}</li>
            <li>{t('aboutMe.english')}</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <a
            href="https://mohamedmaamir.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold py-3 px-6 rounded-md transition-colors duration-200 ${
              isDarkMode
                ? 'bg-white text-gray-900 hover:bg-gray-200'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {t('aboutMe.visitWebsite')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;