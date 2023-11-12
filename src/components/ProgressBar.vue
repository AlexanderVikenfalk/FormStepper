<template>
  <!-- Single <ol> rendered by transition-group with flex styling -->
  <transition-group
    tag="ol"
    class="flex divide-x divide-neutral-200 w-full"
    enter-active-class="transition-opacity ease-out duration-300"
    leave-active-class="transition-opacity ease-in duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <!-- List items will fill equal space and center their content -->
    <li
      v-for="step in steps"
      :key="step.number"
      class="flex-1 flex items-center justify-center transition duration-300 ease-in-out"
      :class="{
        'text-primary-600': step.number <= stepperStore.currentStepIndex + 1,
        'text-neutral-400': step.number > stepperStore.currentStepIndex + 1,
      }"
    >
      <!-- SVG and Step Number inside a flex container -->
      <div class="flex items-center space-x-2">
        <svg
          class="w-3.5 h-3.5 sm:w-4 sm:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <!-- SVG path for check icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>{{ $t(step.titleKey) }}</span>
      </div>
    </li>
  </transition-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStepperStore } from '@/stores/stepperStore'

const stepperStore = useStepperStore()
const steps = ref([
  { number: 1, titleKey: 'wizard.steps.welcome' },
  { number: 2, titleKey: 'wizard.steps.personal_data' },
  { number: 3, titleKey: 'wizard.steps.terms' },
  { number: 4, titleKey: 'wizard.steps.result' },
])
</script>
