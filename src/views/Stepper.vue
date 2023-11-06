<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import FormWizard from "@/components/FormWizard.vue";
import FormStep from "@/components/FormStep.vue";

// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    dummyField: yup.string(),
  }),
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
    <!-- STEP 0 - Welcome Step -->
    <FormStep>
      <div class="flex">
        <div class="flex items-center justify-center w-1/2">
          <icon name="welcome"></icon>
        </div>
        <article class="flex flex-col items-center justify-center w-1/2">
          <h1>Welcome</h1>
          <p>This application will take you through 3 steps.</p>
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
        </article>
      </div>
      <Field class="invisible" name="dummyField" type="text" />
    </FormStep>

    <!--      // STEP 1-->
    <FormStep>
      <div class="flex">
        <div class="flex items-center justify-center w-1/2">
          <icon name="nameData"></icon>
        </div>
        <article class="flex flex-col items-center justify-center w-1/2">
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

          <label class="wizard-input-label" for="firstName">{{
            $t("wizard.first_name")
          }}</label>
        </article>
      </div>
    </FormStep>

    <!--      // STEP 2-->
    <FormStep>
      <div class="flex">
        <div class="flex items-center justify-center w-1/2">
          <icon name="terms"></icon>
        </div>
        <article class="flex flex-col items-center justify-center w-1/2">
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
          <ErrorMessage class="wizard-input-error" name="terms"
            >test
          </ErrorMessage>
        </article>
      </div>
    </FormStep>

    <!--    Final Step -->
    <FormStep>
      <div class="flex">
        <div class="flex items-center justify-center w-1/2">
          <icon name="name"></icon>
        </div>
        <article class="flex flex-col items-center justify-center w-1/2">
          <h1>Thank you for your submission</h1>
          <p>Here is a summary of your submission</p>
          <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        </article>
      </div>
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
