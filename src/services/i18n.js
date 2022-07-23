import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../lang/en.json';
import sp from '../lang/sp.json';
import ua from '../lang/ua.json';

export const init18n = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector) //Custom library plugin for language detection
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: en,
        },
        sp: {
          translation: sp,
        },
        ua: {
          translation: ua,
        },
      },
      fallbackLng: "sp",
    });
}

