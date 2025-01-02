// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my personal website",
      greeting: "Hello, Im Giovanny Caluña, how are you?",
      start: "Start",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi blog personal",
      greeting: "Hola, Soy Giovanny Caluna ¿cómo estás?",
        start: "Iniciar",
    },
  },
};

i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language when translations are not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
