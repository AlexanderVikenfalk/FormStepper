import { object, string, boolean } from "yup";
import StepWelcome from "@/components/stepper/StepWelcome.vue";
import StepPersonalData from "./StepPersonalData.vue";
import StepUserAgreement from "@/components/stepper/StepUserAgreement.vue";
import StepResult from "@/components/stepper/StepResult.vue";

const noValidationSchema = object({});

export const steps = [
  {
    component: StepWelcome,
    validationSchema: noValidationSchema,
  },
  {
    component: StepPersonalData,
    validationSchema: object({
      firstName: string().required().label("First Name"),
      lastName: string().required().label("Last Name"),
      userName: string().required().label("Github User Name"),
    }),
  },
  {
    component: StepUserAgreement,
    validationSchema: object({
      email: string().required().email().label("Email"),
      terms: boolean()
        .default(false)
        .required("You must accept the terms and conditions")
        .oneOf([true], "You must accept the terms and conditions") // Replaced 'equals' with 'oneOf'
        .label("Accept Terms and Conditions"),
    }),
  },
  {
    component: StepResult,
    validationSchema: noValidationSchema,
  },
];
