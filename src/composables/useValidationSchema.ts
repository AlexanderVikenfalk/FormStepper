// composables/useValidationSchema.ts
import { computed, ComputedRef } from 'vue'
import * as yup from 'yup'
import i18n from '@/i18n'
import { useWebAPI } from '@/composables/useWebAPI.ts'
import { useDebounceFn as useDebounce } from '@vueuse/core'

const { fetchUser, error, isLoading } = useWebAPI()

const debounceDelay = 500
const username = ref('')
const debouncedFetchUser = useDebounce(async () => {
  if (username.value) {
    await fetchUser(username.value)
  }
}, debounceDelay)

// Watch the username ref and call the debounced function on change
watch(username, () => {
  debouncedFetchUser()
})

interface ValidationSchemas {
  StepWelcome: yup.ObjectSchema
  StepPersonalData: yup.ObjectSchema
  StepUserAgreement: yup.ObjectSchema
  StepResult: yup.ObjectSchema
}

export function useValidationSchema(): ComputedRef<ValidationSchemas> {
  const firstNameValidationSchema = computed(() =>
    yup.string().required(
      i18n.global.t('wizard.validation.required', {
        field: i18n.global.t('wizard.labels.first_name'),
      }),
    ),
  )

  const lastNameValidationSchema = computed(() =>
    yup.string().required(
      i18n.global.t('wizard.validation.required', {
        field: i18n.global.t('wizard.labels.last_name'),
      }),
    ),
  )

  const userNameValidationSchema = computed(() =>
    yup
      .string()
      .required(
        i18n.global.t('wizard.validation.required', {
          field: i18n.global.t('wizard.labels.user_name'),
        }),
      )
      .test(
        'wizard.github-username-exists',
        i18n.global.t('wizard.validation.github_user_name_invalid'),
        async value => {
          username.value = value
          if (!value || isLoading.value) {
            return false
          }
          await new Promise(resolve => setTimeout(resolve, debounceDelay + 100))

          return !error.value
        },
      ),
  )

  const emailValidationSchema = computed(() =>
    yup
      .string()
      .email(i18n.global.t('wizard.validation.email'))
      .required(
        i18n.global.t('wizard.validation.required', {
          field: i18n.global.t('wizard.labels.email'),
        }),
      ),
  )

  const termsValidationSchema = computed(() =>
    yup
      .boolean()
      .required(i18n.global.t('wizard.validation.accept_terms'))
      .oneOf([true], i18n.global.t('wizard.validation.accept_terms')),
  )

  return computed<ValidationSchemas>(() => ({
    StepWelcome: yup.object({}),
    StepPersonalData: yup.object({
      firstName: firstNameValidationSchema.value,
      lastName: lastNameValidationSchema.value,
      userName: userNameValidationSchema.value,
    }),
    StepUserAgreement: yup.object({
      email: emailValidationSchema.value,
      terms: termsValidationSchema.value,
    }),
    StepResult: yup.object({}),
  }))
}
