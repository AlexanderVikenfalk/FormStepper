// steps.ts
import * as yup from "yup";
import StepOneComponent from "./StepOneComponent.vue";
import StepTwoComponent from "./StepTwoComponent.vue";
import StepThreeComponent from "./StepThreeComponent.vue";
import StepFourComponent from "./StepFourComponent.vue";

const noValidationSchema = yup.object({});

export const steps = [
  {
    component: StepOneComponent,
    validationSchema: noValidationSchema,
  },
  {
    component: StepTwoComponent,
    validationSchema: yup.object({
      firstName: yup.string().required().label("First Name"),
      lastName: yup.string().required().label("Last Name"),
      userName: yup.string().required().label("Github User Name"),
    }),
  },
  {
    component: StepThreeComponent,
    validationSchema: yup.object({
      email: yup.string().required().email().label("Email"),
      terms: yup
        .boolean()
        .default(false)
        .required()
        .equals([true])
        .label("Accept Terms and Conditions"),
    }),
  },
  {
    component: StepFourComponent,
    validationSchema: noValidationSchema,
  },
];
