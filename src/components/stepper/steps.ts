// steps.ts
import * as yup from "yup";
import StepWelcome from "@/components/stepper/StepWelcome.vue";
import StepPersonalData from "./StepPersonalData.vue";
import StepUserAgreement from "@/components/stepper/StepUserAgreement.vue";
import StepResult from "@/components/stepper/StepResult.vue";

const noValidationSchema = yup.object({});

export const steps = [
  {
    component: StepWelcome,
    validationSchema: noValidationSchema,
  },
  {
    component: StepPersonalData,
    validationSchema: yup.object({
      firstName: yup.string().required().label("First Name"),
      lastName: yup.string().required().label("Last Name"),
      userName: yup.string().required().label("Github User Name"),
    }),
  },
  {
    component: StepUserAgreement,
    validationSchema: yup.object({
      email: yup.string().required().email().label("Email"),
      terms: yup
        .boolean()
        .default(false)
        .required("You must accept the terms and conditions")
        .equals([true], "You must accept the terms and conditions")
        .label("Accept Terms and Conditions"),
    }),
  },
  {
    component: StepResult,
    validationSchema: noValidationSchema,
  },
];
