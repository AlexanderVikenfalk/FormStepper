import * as yup from 'yup'
import {default as StepWelcome} from '@/views/stepper/StepWelcome.vue'
import {default as StepPersonalData} from '@/views/stepper/StepPersonalData.vue'
import {default as StepUserAgreement} from '@/views/stepper/StepUserAgreement.vue'
import {default as StepResult} from '@/views/stepper/StepResult.vue'
import i18n from '@/i18n' // const { fetchUser, error } = useGithubUser();

// const { fetchUser, error } = useGithubUser();

// const userNameValidationSchema = yup
//   .string()
//   .required(i18n.global.t("validation.required"))
//   .test(
//     "github-username-exists",
//     i18n.global.t("validation.github_user_name_invalid"),
//     async (value) => {
//       if (!value || loading.value) {
//         // If loading is already in progress, return true to avoid multiple calls
//         return true;
//       }
//       await fetchUser(value);
//       return !error.value;
//     },
//   );

const termsNotAcceptedMessage = computed(() =>
  i18n.global.t('wizard.validation.accept_terms'),
)

const noValidationSchema = yup.object({})
export const stepSchema: Step[] = [
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
      userName: yup
        .string()
        .required(() =>
          i18n.global.t('wizard.validation.required', {
            field: i18n.global.t('wizard.labels.user_name'),
          }),
        )
        .label('wizard.labels.user_name'),
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
