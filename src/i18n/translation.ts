import i18n from "@/i18n";
import { nextTick } from "vue";

const Trans = {
  get defaultLocale(): string {
    return import.meta.env.VITE_DEFAULT_LOCALE as string;
  },

  get supportedLocales(): string[] {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",") as string[];
  },

  get currentLocale(): string {
    return i18n.global.locale.value || "";
  },

  set currentLocale(newLocale: string) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale: string): Promise<void> {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector("html")!.setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
  },

  async loadLocaleMessages(locale: string): Promise<void> {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }

    return nextTick();
  },

  isLocaleSupported(locale: string): boolean {
    return Trans.supportedLocales.includes(locale);
  },

  getUserLocale(): { locale: string; localeNoRegion: string } {
    const locale = window.navigator.language || Trans.defaultLocale;

    return {
      locale,
      localeNoRegion: locale.split("-")[0],
    };
  },

  getPersistedLocale(): string | null {
    const persistedLocale = localStorage.getItem("user-locale");

    if (persistedLocale && Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale(): string {
    const userPersistedLocale = Trans.getPersistedLocale();
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return Trans.defaultLocale;
  },

  async routeMiddleware(to: any, _from: any, next: (arg?: any) => void) {
    const paramLocale = to.params.locale;

    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale());
    }

    await Trans.switchLanguage(paramLocale);

    return next();
  },

  i18nRoute(to: any) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params,
      },
    };
  },
};

export default Trans;
