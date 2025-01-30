'use client';
import { createContext, useContext, useState } from 'react';
import en from './public/locales/en.json';
import jp from './public/locales/jp.json';

const LocaleContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const translations = locale === 'en' ? en : jp;
  locale;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
