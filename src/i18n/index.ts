import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import de from "./locales/de.json"
import se from "./locales/se.json"

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages : {
        en,
        de,
        se,
    }
})
