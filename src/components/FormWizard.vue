<script setup lang="ts">
import { ref, computed } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { steps } from "./stepper/steps"; // Assuming 'steps' is exported from a separate file

const currentStepIndex = ref(0); // Reactive ref to track the current step

const currentStep = computed(() => steps[currentStepIndex.value]);
const currentValidationSchema = computed(
  () => currentStep.value.validationSchema,
);

// Set up form context with vee-validate using the current validation schema
const { handleSubmit, ...formContext } = useForm({
  validationSchema: currentValidationSchema,
});

// Define submit logic
const onSubmit = handleSubmit((values) => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++;
  } else {
    // Handle final submit
  }
});

// Define previous step logic
const onPrevious = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <!-- Dynamically render the current step component -->
      <component :is="currentStep.component" :key="currentStepIndex" />

      <!-- Buttons to navigate steps -->
      <button @click="onPrevious" v-if="currentStepIndex > 0">Previous</button>
      <button type="submit">
        {{ currentStepIndex < steps.length - 1 ? "Next" : "Submit" }}
      </button>
    </form>
  </div>
</template>
