import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MAGIC_NUM = 97;
const EMPTY_MOD = 85;

function CCPCalculator({ isDarkMode }) {
  const { t } = useTranslation();
  const [ccpNumber, setCcpNumber] = useState('');
  const [results, setResults] = useState(null);
  const [copiedStates, setCopiedStates] = useState({
    rip: false,
    ripKey: false,
    ccpKey: false,
  });

  const getCcpRip = (ccp) => {
    const ccpInt = parseInt(ccp, 10);
    const multiplied = ccpInt * 100;
    const mod = multiplied % MAGIC_NUM;
    const ripInt = 97 - ((mod + EMPTY_MOD) % MAGIC_NUM);
    return ripInt.toString().padStart(2, '0');
  };

  const generateRip = (ccp, ripKey) => {
    const paddingLength = 20 - 8 - ccp.length - 2;
    const padding = '0'.repeat(paddingLength);
    return `00799999${padding}${ccp}${ripKey}`;
  };

  const calculateCcpKey = (accountNumber) => {
    const reversed = accountNumber.split('').reverse();
    const multipliers = [4, 5, 6, 7, 8, 9, 10, 11];
    let sum = 0;

    for (let i = 0; i < reversed.length; i++) {
      const digit = parseInt(reversed[i], 10);
      const multiplier = multipliers[i];
      sum += digit * multiplier;
    }

    const key = sum % 100;
    return key.toString().padStart(2, '0');
  };

  const calculateCCP = () => {
    if (!/^\d{1,10}$/.test(ccpNumber)) {
      alert(t('errors.invalidCcp'));
      return;
    }

    const ripKey = getCcpRip(ccpNumber);
    const ccpKey = calculateCcpKey(ccpNumber);
    const rip = generateRip(ccpNumber, ripKey);

    setResults({ ccpKey, ripKey, rip });
    setCopiedStates({ rip: false, ripKey: false, ccpKey: false });
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  const handleCcpNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setCcpNumber(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateCCP();
    }
  };

  const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
  );

  return (
    <div className="text-center mb-20">
      <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('calculator.title')}</h2>
      <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>{t('calculator.description')}</p>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={ccpNumber}
          onChange={handleCcpNumberChange}
          onKeyPress={handleKeyPress}
          placeholder={t('calculator.inputPlaceholder')}
          className={`w-full p-3 mb-4 border rounded-md ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-white'
              : 'bg-white border-gray-300 text-gray-800'
          }`}
          maxLength={10}
        />
        <button
          onClick={calculateCCP}
          className={`w-full font-bold py-3 rounded-md transition-colors duration-200 ${
            isDarkMode
              ? 'bg-white text-gray-900 hover:bg-gray-200'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {t('calculator.calculate')}
        </button>
      </div>
      {results && (
        <div className="mt-8 text-left max-w-md mx-auto">
          <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{t('results.title')}</h3>
          <div className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            <div className="mb-4">
              <p className="mb-1 flex items-center justify-between">
                <span>
                  <span className="font-bold">{t('results.rip')}:</span> {results.rip}
                </span>
                <button
                  onClick={() => copyToClipboard(results.rip, 'rip')}
                  className={`ml-2 text-sm p-1 rounded transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                  aria-label={t('aria.copyToClipboard')}
                >
                  <CopyIcon />
                </button>
              </p>
              {copiedStates.rip && <p className="text-sm text-green-500 fade-out">{t('alerts.copiedToClipboard')}</p>}
            </div>
            <div className="mb-4">
              <p className="mb-1 flex items-center justify-between">
                <span>
                  <span className="font-bold">{t('results.ripKey')}:</span> {results.ripKey}
                </span>
                <button
                  onClick={() => copyToClipboard(results.ripKey, 'ripKey')}
                  className={`ml-2 text-sm p-1 rounded transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                  aria-label={t('aria.copyToClipboard')}
                >
                  <CopyIcon />
                </button>
              </p>
              {copiedStates.ripKey && <p className="text-sm text-green-500 fade-out">{t('alerts.copiedToClipboard')}</p>}
            </div>
            <div>
              <p className="mb-1 flex items-center justify-between">
                <span>
                  <span className="font-bold">{t('results.ccpKey')}:</span> {results.ccpKey}
                </span>
                <button
                  onClick={() => copyToClipboard(results.ccpKey, 'ccpKey')}
                  className={`ml-2 text-sm p-1 rounded transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                  aria-label={t('aria.copyToClipboard')}
                >
                  <CopyIcon />
                </button>
              </p>
              {copiedStates.ccpKey && <p className="text-sm text-green-500 fade-out">{t('alerts.copiedToClipboard')}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CCPCalculator;