// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import de from "./de.json";

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
  lng: "en" /* window.location.pathname.substring(1, 2) === 'es' ? 'es': 'en', */, // Idioma predeterminado
  fallbackLng: "es", // Idioma de respaldo
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
