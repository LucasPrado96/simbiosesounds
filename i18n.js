import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando arquivos de tradução
import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integração com React
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'en', // Define inglês como idioma padrão se o navegador usar outro idioma
    interpolation: {
      escapeValue: false, // React já faz a sanitização dos textos
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'], // Ordem de detecção
      caches: ['localStorage'], // Salva o idioma no localStorage para reutilizar
    },
  });

export default i18n;
