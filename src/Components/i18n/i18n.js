// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import de from "./de.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      de: {
        translation: de,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
