import { createContext, useState, useContext, useEffect } from 'react';
import en from '../translations/en';
import tr from '../translations/tr';
import de from '../translations/de';

const translations = { en, tr, de };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Check URL for language code when component mounts
  useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(Boolean);

    // Check if first segment is a language code
    if (pathSegments.length > 0) {
      const potentialLang = pathSegments[0];
      if (translations[potentialLang]) {
        setLanguage(potentialLang);
      }
    }
  }, []);

  // Update URL when language changes
  useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(Boolean);

    // If first segment is a language code, replace it
    if (pathSegments.length > 0 && translations[pathSegments[0]]) {
      pathSegments[0] = language;
    }
    // Otherwise, add language code (except for default 'en')
    else if (language !== 'en') {
      pathSegments.unshift(language);
    }

    // Don't change URL if it would cause a page reload
    const currentPath = window.location.pathname;
    const newPath = `/${pathSegments.join('/')}`;

    if (currentPath !== newPath && !window.location.pathname.includes('/app/')) {
      window.history.replaceState(null, '', newPath);
    }
  }, [language]);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
