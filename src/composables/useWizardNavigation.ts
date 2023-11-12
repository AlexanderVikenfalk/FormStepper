// useWizardNavigation.ts

import router from '@/router'
import { useStepperStore } from '@/stores/stepperStore'
import { stepSchema } from '@/utils/stepSchema.ts'

const stepperStore = useStepperStore()
export default function useWizardNavigation() {
  const stepCounter = ref(0)

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

  return {
    currentStepIndex,
    stepCounter,
    nextStep,
    previousStep,
    isLastStep,
    hasPreviousStep,
  }
}
