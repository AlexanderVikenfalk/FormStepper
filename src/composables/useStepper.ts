import {ref} from 'vue'
import * as yup from 'yup' // Define a step type if needed

// Define a step type if needed
interface Step {
  validationSchema: yup.AnyObjectSchema
  component: any // Define a more specific type for your step components
}

export default function useStepper(steps: Step[]) {
  const currentStepIndex = ref(0)

  const currentStep = ref(steps[0])

  function nextStep() {
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++
      currentStep.value = steps[currentStepIndex.value]
    }
  }

  function previousStep() {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--
      currentStep.value = steps[currentStepIndex.value]
    }
  }

  function submitStepper(formData: any) {
    // Your submit logic here
  }

  return {
    currentStepIndex,
    currentStep,
    nextStep,
    previousStep,
    submitStepper,
  }
}
