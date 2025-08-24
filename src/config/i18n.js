import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "@/locales/uz.json";
import ru from "@/locales/ru.json";

const getCookie = (name) => {
  if (typeof document === "undefined") return null; // serverda null qaytaradi
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const savedLanguage = getCookie("language") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    ru: { translation: ru },
  },
  lng: savedLanguage,
  fallbackLng: savedLanguage,
  interpolation: { escapeValue: false },
});

export default i18n;