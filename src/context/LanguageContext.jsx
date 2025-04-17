import { createContext, useState, useContext } from 'react';
import en from '../translations/en';
import tr from '../translations/tr';
import de from '../translations/de';

const translations = { en, tr, de };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
