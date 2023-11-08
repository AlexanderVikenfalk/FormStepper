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
      <icon name="step_terms"></icon>
    </div>

    <article class="wizard-content-wrapper">
      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="email">Email</label>
        <Field
          class="wizard-input"
          name="email"
          type="text"
          placeholder="Axel@springer.de"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="email" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <div class="wizard-input-label flex items-center">
          <Field
            class="wizard-checkbox"
            name="terms"
            type="checkbox"
            :value="true"
          />
          <label class="inline-block ml-2" for="terms"
            >I agree with the terms and conditions.</label
          >
        </div>
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="terms"> </ErrorMessage>
        </div>
      </div>
    </article>
  </div>
</template>
