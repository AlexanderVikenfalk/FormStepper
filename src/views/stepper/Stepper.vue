<script lang="ts" setup>
import { ref } from "vue";
import useStepper from "@/composables/useStepper";
import { stepValidationSchema } from "@/utils/stepValidationSchema.ts";
import FormStep from "@/components/FormStep.vue";
import FormWizard from "@/components/FormWizard.vue";

const { currentStepIndex, currentStep, nextStep, previousStep, submitStepper } =
  useStepper(stepValidationSchema);

const formData = ref({});
</script>

<template>
  <FormWizard
    :current-step="currentStepIndex"
    :on-next="nextStep"
    :on-previous="previousStep"
    class="min-height-full height-full"
    @submit="submitStepper"
  >
    <template v-for="(step, index) in stepValidationSchema">
      <FormStep v-if="currentStepIndex === index" :key="index">
        <component :is="step.component" :form-data="formData" />
      </FormStep>
    </template>
  </FormWizard>
</template>
