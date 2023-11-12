import { defineStore } from 'pinia'

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    currentStepIndex: 0,
    totalSteps: 0,
  }),
  actions: {
    setCurrentStepIndex(currentStepIndex: number) {
      this.currentStepIndex = currentStepIndex
    },
    setTotalSteps(totalSteps: number) {
      this.totalSteps = totalSteps
    },
  },
})
