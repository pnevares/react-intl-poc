import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      TITLE: "This is the title",
      HELLO_HOUSE: "Hello house.",
      HELLO_CITY: "Hello city.",
      HELLO_COUNTRY: "Hello country.",
      HELLO_WORLD: "Hello world."
    }
  },
  es: {
    translation: {
      TITLE: "Esto es mi titulo",
      HELLO_HOUSE: "Hola casa.",
      HELLO_CITY: "Hola ciudad.",
      HELLO_COUNTRY: "Hola país.",
      HELLO_WORLD: "Hola mundo."
    }
  }
};

const detection = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lang"
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection,
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
