// components/GoogleTranslateProvider.js
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Script from 'next/script';

const GoogleTranslateContext = createContext({
  language: 'fa',
  changeLanguage: (lang: string) => { },
});

export const useGoogleTranslate = () => useContext(GoogleTranslateContext);

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png", dir: "ltr" },
  { label: "Persian", value: "fa", src: "https://flagcdn.com/h60/ir.png", dir: "rtl" },
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  // @ts-ignore
  new window.google.translate.TranslateElement({
    pageLanguage: "fa",
    includedLanguages
  }, "google_translate_element");
}

const GoogleTranslateProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [language, setLanguage] = useState('fa');

  useEffect(() => {
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;



    // Set initial direction based on the preferred language
    const currentLang = languages.find(lang => lang.value === language) || languages[1];
    document.documentElement.setAttribute("dir", currentLang.dir);

    // Set initial translation
    const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (element) {
      element.value = language;
      element.dispatchEvent(new Event("change"));
    }
  }, [language]);

  const changeLanguage = (newLang: React.SetStateAction<string>) => {
    setLanguage(newLang);

    // Set language direction
    const currentLang = languages.find(lang => lang.value === newLang) || languages[1];
    document.documentElement.setAttribute("dir", currentLang.dir);
  };

  return (
    <GoogleTranslateContext.Provider value={{ language, changeLanguage }}>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" style={{ visibility: "hidden", display: 'none', width: "1px", height: "1px" }}></div>
      {children}
    </GoogleTranslateContext.Provider>
  );
};

export default GoogleTranslateProvider;
