import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_ar from './assets/locales/ar/common.json'
import common_en from './assets/locales/en/common.json'


const resources = {
  en: {
    translation: common_en
  },
  ar: {
    translation: common_ar
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ar",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;