import { createI18n } from "vue-i18n";

const messages      = {
    en: {
        nav: {
            home: "Home",
            about: "About"
        },
        home: {
            header: "Welcome to the Vue 3 I18n tutorial!",
            created_by: "This tutorial was brought to you by Lokalise."
        },
        about: {
            header: "About us"
        }
    },
    se: {
        nav: {
            home: "Hem",
            about: "Om"
        },
        home: {
            header: "Välkommen till Vue 3 guiden!",
            created_by: "Denna guide skapades av",
        },
        about: {
            header: "Om oss"
        }
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})
