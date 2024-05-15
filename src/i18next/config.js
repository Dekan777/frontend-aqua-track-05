import { use } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import uaTranslation from './locales/ua/translation.json';
import noTranslation from './locales/no/translation.json';
const i18n = use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: enTranslation,
      },
      ua: {
        translation: uaTranslation,
      },
      no: {
        translation: noTranslation,
      },
    },
    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;
