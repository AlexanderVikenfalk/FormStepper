<template>
  TEST
  {{ stepperStore.currentStepIndex }}
</template>

<script setup lang="ts">
import { useStepperStore } from '@/stores/stepperStore' // ensure the correct path to your store file

const stepperStore = useStepperStore()
</script>
