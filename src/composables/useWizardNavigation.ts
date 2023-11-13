// useWizardNavigation.ts

import router from '@/router'
import { useStepperStore } from '@/stores/stepperStore'

const stepperStore = useStepperStore()
export default function useWizardNavigation(totalSteps: number) {
  stepperStore.setTotalSteps(totalSteps)

  const currentStepIndex = ref(0)

  const isLastStep = computed(() => currentStepIndex.value === totalSteps - 1)
  const isSecondLastStep = computed(
    () => currentStepIndex.value === totalSteps - 2,
  )

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

  return {
    currentStepIndex,
    nextStep,
    previousStep,
    isLastStep,
    isSecondLastStep,
    hasPreviousStep,
  }
}
