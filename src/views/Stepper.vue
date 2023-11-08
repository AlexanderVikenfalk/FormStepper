<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import useStepper from "@/composables/useStepper";
import { steps } from "@/components/stepper/steps.ts";
import FormStep from "@/components/FormStep.vue";
import FormWizard from "@/components/FormWizard.vue";

const { currentStepIndex, currentStep, nextStep, previousStep, submitStepper } =
  useStepper(steps);

const formData = ref({}); // Initialize form data object
</script>

<template>
  <FormWizard
    :current-step="currentStepIndex"
    :on-next="nextStep"
    :on-previous="previousStep"
    class="min-height-full height-full"
    @submit="submitStepper"
  >
    <template v-for="(step, index) in steps">
      <FormStep :key="index" v-if="currentStepIndex === index">
        <component :is="step.component" :form-data="formData" />
      </FormStep>
    </template>
  </FormWizard>
</template>
