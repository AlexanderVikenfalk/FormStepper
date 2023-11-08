<!-- StepOneComponent.vue -->
<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

// Define the props if any data is needed from the parent component
defineProps({
  // ... any props passed from the parent
});

defineEmits(["update:modelValue"]); // if the step needs to emit events

// Logic for StepOneComponent
// ...
</script>

<template>
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper pr-4">
      <icon name="step_personal_data"></icon>
    </div>
    <article class="wizard-content-wrapper">
      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="firstName">{{
          $t("wizard.first_name")
        }}</label>

        <Field
          class="wizard-input"
          name="firstName"
          type="text"
          placeholder="Axel"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="firstName" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="lastName"> Last name</label>
        <Field
          class="wizard-input"
          name="lastName"
          type="text"
          placeholder="Springer"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="lastName" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="firstName">
          Github user name</label
        >
        <Field
          class="wizard-input"
          name="userName"
          type="text"
          placeholder="Caesar"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="userName" />
        </div>
      </div>
    </article>
  </div>
</template>
