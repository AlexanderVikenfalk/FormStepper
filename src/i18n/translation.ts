import i18n from '@/i18n'
import { nextTick } from 'vue'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const Trans = {
  get defaultLocale(): string {
    return import.meta.env.VITE_DEFAULT_LOCALE as string
  },

  get supportedLocales(): string[] {
    return (import.meta.env.VITE_SUPPORTED_LOCALES as string).split(',')
  },

  get currentLocale(): string {
    return i18n.global.locale.value
  },

  set currentLocale(newLocale: string) {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale: string): Promise<void> {
    if (!i18n.global.availableLocales.includes(newLocale)) {
      const messages = await import(`@/i18n/locales/${newLocale}.json`)
      i18n.global.setLocaleMessage(newLocale, messages.default)
    }

    Trans.currentLocale = newLocale
    document.documentElement.setAttribute('lang', newLocale)
    localStorage.setItem('user-locale', newLocale)

    await nextTick()
  },

  isLocaleSupported(locale: string): boolean {
    return Trans.supportedLocales.includes(locale)
  },

  getUserLocale(): { locale: string; localeNoRegion: string } {
    const locale = window.navigator.language || Trans.defaultLocale
    return {
      locale,
      localeNoRegion: locale.split('-')[0],
    }
  },

  getPersistedLocale(): string | null {
    const persistedLocale = localStorage.getItem('user-locale')
    if (persistedLocale && Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    }
    return null
  },

  guessDefaultLocale(): string {
    const userPersistedLocale = Trans.getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }

    const userPreferredLocale = Trans.getUserLocale()
    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },
}

export const routeMiddleware = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const paramLocale = to.params.locale as string

  if (!Trans.isLocaleSupported(paramLocale)) {
    return next(Trans.guessDefaultLocale())
  }

  await Trans.switchLanguage(paramLocale)
  return next()
}

export const i18nRoute = (to: RouteLocationNormalized) => {
  return {
    ...to,
    params: {
      locale: Trans.currentLocale,
      ...to.params,
    },
  }
}

export default Trans
