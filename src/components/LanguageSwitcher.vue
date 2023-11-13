<template>
  <select class="bg-white" @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :selected="locale === sLocale"
      :value="sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'

export default {
  setup() {
    const { t, locale } = useI18n()
    const router = useRouter()

    const supportedLocales = Tr.supportedLocales

    const switchLanguage = async event => {
      const newLocale = event.target.value

      await Tr.switchLanguage(newLocale)

      try {
        await router.replace({ params: { locale: newLocale } })
      } catch (e) {
        router.push('/')
      }
    }

    return { t, locale, supportedLocales, switchLanguage }
  },
}
</script>
