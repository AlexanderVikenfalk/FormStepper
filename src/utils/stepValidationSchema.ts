import * as yup from "yup";
import StepWelcome from "@/views/stepper/StepWelcome.vue";
import StepPersonalData from "@/views/stepper/StepPersonalData.vue";
import StepUserAgreement from "@/views/stepper/StepUserAgreement.vue";
import StepResult from "@/views/stepper/StepResult.vue";
import i18n from "@/i18n";
import { useGithubUser } from "@/composables/useGithubUser";

const { fetchUser, error } = useGithubUser();

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
const noValidationSchema = yup.object({});
export const stepValidationSchema = [
  {
    component: StepWelcome,
    validationSchema: noValidationSchema,
  },
  {
    component: StepPersonalData,
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required(() => i18n.global.t("validation.required"))
        .label(i18n.global.t("wizard.labels.first_name")),
      lastName: yup
        .string()
        .required()
        .label(i18n.global.t("wizard.labels.last_name")),
      userName: yup.string().required().label("guthub"),
    }),
  },
  {
    component: StepUserAgreement,
    validationSchema: yup.object({
      email: yup.string().required().email().label("Email"),
      terms: yup
        .boolean()
        .default(false)
        .required(i18n.global.t("validation.accept_terms"))
        .equals([true], i18n.global.t("validation.accept_terms"))
        .label(i18n.global.t("wizard.agree_to_terms")),
    }),
  },
  {
    component: StepResult,
    validationSchema: noValidationSchema,
  },
];
