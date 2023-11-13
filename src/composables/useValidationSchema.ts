// composables/useValidationSchema.ts
import { computed, ComputedRef } from 'vue'
import * as yup from 'yup'
import i18n from '@/i18n'

interface ValidationSchemas {
  StepWelcome: yup.ObjectSchema
  StepPersonalData: yup.ObjectSchema
  StepUserAgreement: yup.ObjectSchema
  StepResult: yup.ObjectSchema
  // Add more steps if needed
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
    yup.string().required(
      i18n.global.t('wizard.validation.required', {
        field: i18n.global.t('wizard.labels.user_name'),
      }),
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

  const stepValidationSchemas = computed<ValidationSchemas>(() => ({
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

  return stepValidationSchemas
}
