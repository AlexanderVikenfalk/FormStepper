import { createI18n, I18nOptions } from "vue-i18n";
import pluralRules from "./rules/pluralization";
import numberFormats from "./rules/numbers.js";
import datetimeFormats from "./rules/datetime.js";
import en from "./locales/en.json";
import de from "./locales/de.json";
import se from "./locales/se.json";

const i18nOptions: I18nOptions = {
  locale: import.meta.env.VITE_DEFAULT_LOCALE as string,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE as string,
  legacy: false,
  globalInjection: true,
  messages: { en, de, se },
  runtimeOnly: false,
  pluralRules,
  numberFormats,
  datetimeFormats,
};

const i18n = createI18n(i18nOptions);

export default i18n;
