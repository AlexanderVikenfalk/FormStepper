// useWizardNavigation.ts

import router from '@/router'
import { useStepperStore } from '@/stores/stepperStore'

const stepperStore = useStepperStore()
export default function useWizardNavigation() {
  // TODO: THIS NEEDS TO BE THE ACTUAL LENGTH OF STEPS
  const stepSchema = [1, 2, 3, 4]
  stepperStore.setTotalSteps(stepSchema.length)
  const totalSteps = stepperStore.totalSteps
  const currentStepIndex = ref(0)

  const isLastStep = computed(() => currentStepIndex.value === totalSteps - 1)
  const hasPreviousStep = computed(() => currentStepIndex.value > 0)

  const nextStep = nextStepName => {
    if (currentStepIndex.value < totalSteps - 1) {
      currentStepIndex.value++
      stepperStore.setCurrentStepIndex(currentStepIndex.value)
      router.push({ name: nextStepName })
    }
  }
  const previousStep = previousStepName => {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--
      stepperStore.setCurrentStepIndex(currentStepIndex.value)
      router.push({ name: previousStepName })
    }
  }

  const finalizeProcess = () => {
    // Define the logic for finalizing the process here
    console.log('Final process logic goes here')
    // For example, navigating to a confirmation page or showing a modal
    // router.push({ name: 'final-confirmation' });
  }

  return {
    currentStepIndex,
    nextStep,
    previousStep,
    isLastStep,
    finalizeProcess,
    hasPreviousStep,
  }
}
