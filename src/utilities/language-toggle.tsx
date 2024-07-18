// components/LanguageToggle.js
import React from 'react';
import Image from 'next/image';
import { useGoogleTranslate } from './google-translate';

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png", dir: "ltr" },
  { label: "Persian", value: "fa", src: "https://flagcdn.com/h60/ir.png", dir: "rtl" },
];

export const LanguageToggle = () => {
  const { language, changeLanguage } = useGoogleTranslate();
  const currentLang = languages.find(lang => lang.value === language) || languages[1];

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fa' : 'en';
    changeLanguage(newLang);

    // Set cookie (alternative approach)
    document.cookie = `prefLangCookie=${newLang}; path=/`;
  };

  return (
    <button onClick={toggleLanguage} className="flex items-center">
      <Image
        src={currentLang.src}
        alt={currentLang.label}
        className="w-6 h-6"
        width={24}
        height={24}
      />
    </button>
  );
};
