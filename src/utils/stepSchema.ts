import * as yup from 'yup'
import { default as StepWelcome } from '@/views/stepper/StepWelcome.vue'
import { default as StepPersonalData } from '@/views/stepper/StepPersonalData.vue'
import { default as StepUserAgreement } from '@/views/stepper/StepUserAgreement.vue'
import { default as StepResult } from '@/views/stepper/StepResult.vue'
import i18n from '@/i18n'

const userNameValidationSchema = yup
  .string()
  .required(i18n.global.t('wizard.validation.required'))

const termsNotAcceptedMessage = computed(() =>
  i18n.global.t('wizard.validation.accept_terms'),
)

const noValidationSchema = yup.object({})
export const stepSchema = [
  {
    name: 'StepWelcome',
    component: StepWelcome,
    validationSchema: noValidationSchema,
  },
  {
    name: 'StepPersonalData',
    component: StepPersonalData,
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required(() =>
          i18n.global.t('wizard.validation.required', {
            field: i18n.global.t('wizard.labels.first_name'),
          }),
        )
        .label(i18n.global.t('wizard.labels.first_name')),
      lastName: yup
        .string()
        .required(() =>
          i18n.global.t('wizard.validation.required', {
            field: i18n.global.t('wizard.labels.last_name'),
          }),
        )
        .label(i18n.global.t('wizard.labels.last_name')),
      userName: userNameValidationSchema,
    }),
  },
  {
    name: 'StepUserAgreement',
    component: StepUserAgreement,
    validationSchema: yup.object({
      email: yup
        .string()
        .required(() =>
          i18n.global.t('wizard.validation.required', {
            field: i18n.global.t('wizard.labels.email'),
          }),
        )
        .email()
        .label('wizard.labels.email'),
      terms: yup
        .boolean()
        .default(false)
        .required(termsNotAcceptedMessage.value)
        .equals([true], termsNotAcceptedMessage.value)
        .label(i18n.global.t('wizard.labels.agree_to_terms')),
    }),
  },
  {
    name: 'StepResult',
    component: StepResult,
    validationSchema: noValidationSchema,
  },
]
