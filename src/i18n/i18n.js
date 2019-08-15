import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en, es } from './locales';

const resources = { en, es };

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
