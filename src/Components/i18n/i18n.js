// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";

const LANGUAGE_KEY = "appLanguage";

const storedLanguage = localStorage.getItem(LANGUAGE_KEY);

i18n.use(initReactI18next).init({
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
  lng: storedLanguage || "en",
  fallbackLng: "es",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
});

export default i18n;
