// components/GoogleTranslateProvider.js
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Script from 'next/script';

const GoogleTranslateContext = createContext({
  language: 'en',
  changeLanguage: (lang) => {},
});

export const useGoogleTranslate = () => useContext(GoogleTranslateContext);

const GoogleTranslateProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const frame = document.querySelector('iframe.goog-te-menu-frame');
    if (frame) {
      const langButton = frame.contentDocument.querySelector(`[lang="${lang}"]`);
      if (langButton) {
        langButton.click();
      }
    }
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,fa' }, 'google_translate_element');
    };
  }, []);

  return (
    <GoogleTranslateContext.Provider value={{ language, changeLanguage }}>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      {children}
    </GoogleTranslateContext.Provider>
  );
};

export default GoogleTranslateProvider;
