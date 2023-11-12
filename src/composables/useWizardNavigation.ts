// useWizardNavigation.ts

import router from '@/router'
import { useStepperStore } from '@/stores/stepperStore'

const stepperStore = useStepperStore()
export default function useWizardNavigation(totalSteps: number) {
  const stepCounter = ref(0)

  const currentStepIndex = ref(0)

  const isLastStep = computed(() => currentStepIndex.value === totalSteps - 1)
  const hasPreviousStep = computed(() => currentStepIndex.value > 0)

  const nextStep = nextStepName => {
    console.log(nextStepName)
    if (currentStepIndex.value < totalSteps - 1) {
      currentStepIndex.value++
      console.log(stepperStore)
      stepperStore.setCurrentStepIndex(currentStepIndex)
      router.push({ name: nextStepName })
    }
  }
  const previousStep = previousStepName => {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--
      setCurrentStepIndex(currentStepIndex)
      router.push({ name: previousStepName })
    }
  }

  return {
    currentStepIndex,
    stepCounter,
    nextStep,
    previousStep,
    isLastStep,
    hasPreviousStep,
  }
}
