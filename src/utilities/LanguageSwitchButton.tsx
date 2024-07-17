// components/LanguageSwitchButton.js
'use client';
import React from 'react';
import { useGoogleTranslate } from './google-provider';

const LanguageSwitchButton = () => {
  const { language, changeLanguage } = useGoogleTranslate();
  const nextLanguage = language === 'en' ? 'fa' : 'en';

  return (
    <button onClick={() => changeLanguage(nextLanguage)} className="flex items-center space-x-2 p-2 bg-white shadow rounded">
      <img
        src={language === 'en' ? 'https://flagcdn.com/h60/us.png' : 'https://flagcdn.com/h60/ir.png'}
        alt={language === 'en' ? 'English' : 'Persian'}
        className="w-6 h-6"
      />
      <span>{language === 'en' ? 'English' : 'Persian'}</span>
    </button>
  );
};

export default LanguageSwitchButton;
