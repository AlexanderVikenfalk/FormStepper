// useStepper.ts
import { ref } from 'vue';
import * as yup from 'yup';

// Define a step type if needed
interface Step {
  validationSchema: yup.AnyObjectSchema;
  component: any; // Define a more specific type for your step components
}

export default function useStepper(steps: Step[]) {
  const currentStepIndex = ref(0);

  const currentStep = ref(steps[0]);

  function nextStep(formData: any) {
    // Perform validation here if necessary
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++;
      currentStep.value = steps[currentStepIndex.value];
    }
  }

  function previousStep() {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--;
      currentStep.value = steps[currentStepIndex.value];
    }
  }

  function submitStepper(formData: any) {
    // Your submit logic here
    console.log(JSON.stringify(formData, null, 2));
  }

  return {
    currentStepIndex,
    currentStep,
    nextStep,
    previousStep,
    submitStepper,
  };
}
