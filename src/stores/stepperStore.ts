// stores/stepper.js
import { defineStore } from 'pinia'

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    currentStepIndex: 0,
  }),
  actions: {
    setCurrentStepIndex(currentStepIndex: number) {
      this.currentStepIndex = currentStepIndex.value
    },
  },
})
