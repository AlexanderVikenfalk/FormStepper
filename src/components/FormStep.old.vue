<script setup lang="ts">
import useWizardNavigation from '@/composables/useWizardNavigation.ts'
import { stepSchema } from '@/utils/stepSchema.ts'

const { currentStepIndex } = useWizardNavigation()
const currentComponent = computed(() => {
  console.log(currentStepIndex)
  return stepSchema[currentStepIndex.value].component
})
</script>

<template>
  Current Step index {{ currentStepIndex }}
  <component :is="currentComponent" key="currentStepIndex" />
</template>
