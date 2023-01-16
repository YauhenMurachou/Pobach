import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translationEN.json';
import translationBY from './locales/by/translationBY.json';

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
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
