<!-- StepOneComponent.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
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
        >Fill out the terms and conditions
      </ErrorMessage>
    </article>
  </div>
</template>
