import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: {
    de: {
      common: require("../locales/de/common"),
      translations: require("../locales/de/translations"),
    },
    en: {
      common: require("../locales/en/common"),
      translations: require("../locales/en/translations"),
    },
  },
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["de", "en"]

export default i18next
