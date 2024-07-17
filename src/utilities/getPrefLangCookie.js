// src/utilities/getPrefLangCookie.js
import { cookies } from 'next/headers';

export const getPrefLangCookie = () => {
  return cookies().get('googtrans')?.value ?? 'en';
};
