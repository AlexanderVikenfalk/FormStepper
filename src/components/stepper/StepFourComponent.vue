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
    <div class="flex items-center justify-center w-1/2"></div>
    <article class="flex flex-col items-center justify-center w-1/2">
      <h1>Thank you for your submission</h1>
      <p>Here is a summary of your submission</p>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </article>
  </div>
</template>
