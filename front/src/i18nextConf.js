import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

//import tous les translations possibles
import translationEN from './assets/locales/en/translation.json';
import translationFR from './assets/locales/fr/translation.json';
import translationMG from './assets/locales/mg/translation.json';

const allSuggestLanguages = ['fr', 'en', 'mg'];
const default_lng = 'en';

const resources = {
   en: {
      translation: translationEN,
   },
   mg: {
      translation: translationMG,
   },
   fr: {
      translation: translationFR,
   },
};

i18n
   .use(Backend) //charger les translations dans public/assets/locales
   .use(LanguageDetector) //detecter le language de l'user
   .use(initReactI18next)
   .init({
      resources,
      lng: default_lng,
      detection: {
         checkWhitelist: true,
      },
      debug: false,
      whitelist: allSuggestLanguages,
      interpolation: {
         escapeValue: false, //excape par default
      },
   });

export default i18n;
