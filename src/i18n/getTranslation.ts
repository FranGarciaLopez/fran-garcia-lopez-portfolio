import { translations } from "./locale";
import { defaultLocale } from "./config";

export const getTranslation = (lang: string, section: string, key: string) => {
  return translations[lang]?.[section]?.[key] || translations[defaultLocale]?.[section]?.[key] || key;
};
