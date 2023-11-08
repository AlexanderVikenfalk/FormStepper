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
    <article class="wizard-content-wrapper">
      <h1>Thank you for your submission</h1>
      <p>Here is a summary of your submission</p>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </article>
  </div>
</template>
