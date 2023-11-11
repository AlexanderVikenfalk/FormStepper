import { computed, ComputedRef } from 'vue'
import i18n from '@/i18n'

export function useRequiredLabel(
  key: string,
  isRequired: boolean = false,
): ComputedRef<string> {
  return computed(() => {
    const baseLabel = i18n.global.t(`wizard.labels.${key}`)
    if (isRequired) {
      const requiredText = i18n.global.t('wizard.labels.required_field')
      return `${baseLabel} ${requiredText}`
    }
    return baseLabel
  })
}
