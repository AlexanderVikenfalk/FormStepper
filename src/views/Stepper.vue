<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import FormWizard from "@/components/FormWizard.vue";
import FormStep from "@/components/FormStep.vue";

// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().required().label("Last Name"),
    userName: yup.string().required().label("Github User Name"),
  }),
  yup.object({
    email: yup.string().required().email().label("Email"),
    terms: yup
      .boolean()
      .default(false)
      .required()
      .equals([true])
      .label("Accept Terms and Conditions"),
  }),
];

/**
 * Only Called when the last step is submitted
 */
function onSubmit(formData) {
  console.log(JSON.stringify(formData, null, 2));
}
</script>

<template>
  <FormWizard :validation-schema="validationSchema" @submit="onSubmit">
    <!--      // STEP 1-->
    <FormStep>
      <label class="wizard-input-label" for="firstName">{{
        $t("wizard.first_name")
      }}</label>
      <Field
        class="wizard-input"
        name="firstName"
        type="text"
        placeholder="Axel"
      />
      <ErrorMessage class="wizard-input-error" name="firstName" />

      <label class="wizard-input-label" for="firstName">Last name</label>
      <Field
        class="wizard-input"
        name="lastName"
        type="text"
        placeholder="Springer"
      />
      <ErrorMessage class="wizard-input-error" name="lastName" />

      <label class="wizard-input-label" for="firstName">
        Github user name</label
      >
      <Field
        class="wizard-input"
        name="userName"
        type="text"
        placeholder="Caesar"
      />
      <ErrorMessage class="wizard-input-error" name="userName" />
    </FormStep>

    <!--      // STEP 2-->
    <FormStep>
      <label class="wizard-input-label" for="email">Email</label>
      <Field
        class="wizard-input"
        name="email"
        type="text"
        placeholder="Axel@springer.de"
      />
      <ErrorMessage class="wizard-input-error" name="email" />

      <label class="wizard-input-label" for="terms"
        >Agreeing to the terms and conditions</label
      >
      <Field
        class="wizard-checkbox"
        name="terms"
        type="checkbox"
        :value="true"
      />
      <ErrorMessage class="wizard-input-error" name="terms">test </ErrorMessage>
    </FormStep>
  </FormWizard>
</template>

<style>
input,
select {
  margin: 10px 0;
  display: block;
}
</style>
