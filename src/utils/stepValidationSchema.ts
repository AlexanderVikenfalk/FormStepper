import * as yup from "yup";
import StepWelcome from "@/views/stepper/StepWelcome.vue";
import StepPersonalData from "@/views/stepper/StepPersonalData.vue";
import StepUserAgreement from "@/views/stepper/StepUserAgreement.vue";
import StepResult from "@/views/stepper/StepResult.vue";
import i18n from "@/i18n";
import { useGithubUser } from "@/composables/useGithubUser";

const { fetchUser, error } = useGithubUser();

const githubUsernameCheck = async (username) => {
  await fetchUser(username);
  if (error.value) {
    return false; // If there's an error, the validation fails
  }
  return true; // If there's no error, the validation passes
};

const noValidationSchema = yup.object({});
export const stepValidationSchema = [
  {
    component: StepWelcome,
    validationSchema: noValidationSchema,
  },
  {
    component: StepPersonalData,
    validationSchema: yup.object({
      userName: yup
        .string()
        .required(() => i18n.global.t("validation.required"))
        .test(
          "is-github-username-valid",
          () => i18n.global.t("validation.githubUsernameInvalid"),
          function (value) {
            return githubUsernameCheck(value);
          },
        ),
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
