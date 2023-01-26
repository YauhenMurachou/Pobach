import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationBY from './locales/by/translationBY.json';
import translationEN from './locales/en/translationEN.json';

const resources = {
  en: {
    translation: translationEN,
  },
  by: {
    translation: translationBY,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
