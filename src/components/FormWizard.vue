<script lang="ts" setup>
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useWebAPI } from '@/composables/useWebAPI.ts'
import { useFormStore } from '@/stores/formStore'
import i18n from '@/i18n'
import useWizardNavigation from '@/composables/useWizardNavigation'
import SpinnerIcon from '@/components/SpinnerIcon.vue'
import { useValidationSchema } from '@/composables/useValidationSchema'
import { stepSchema } from '@/utils/stepSchema'

const formStore = useFormStore()
const { error, isLoading } = useWebAPI()

const totalSteps = stepSchema.length

const {
  currentStepIndex,
  nextStep,
  previousStep,
  isLastStep,
  isSecondLastStep,
  hasPreviousStep,
} = useWizardNavigation(totalSteps)

const stepValidationSchemas = useValidationSchema()

const currentSchema = computed(() => {
  const stepName = stepSchema[currentStepIndex.value].name
  return stepValidationSchemas.value[stepName] || yup.object({}) // Fallback to an empty schema if not defined
})

const currentComponent = computed(() => {
  return stepSchema[currentStepIndex.value].component
})

const nextStepName = computed(() => {
  // Get the name of the next step, only if we're not at the last step.
  return isLastStep.value ? null : stepSchema[currentStepIndex.value + 1]?.name
})

const previousStepName = computed(() => {
  // Get the name of the previous step, only if there is a previous step.
  return currentStepIndex.value > 0
    ? stepSchema[currentStepIndex.value - 1]?.name
    : null
})

const displayError = computed(() => {
  if (error.value) {
    return i18n.global.t('error.request_error', { error: error.value })
  }
})

const { handleSubmit } = useForm({
  validationSchema: currentSchema,
  initialValues: formStore.formData,
  keepValuesOnUnmount: true,
})

const onSubmit = handleSubmit(values => {
  formStore.updateFormData(values)

  if (!isLastStep.value) {
    nextStep(nextStepName.value)
  } else if (isSecondLastStep.value) {
    formStore.resetFormData()
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-if="displayError" class="wizard-network-error"></div>
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <component :is="currentComponent" :key="currentStepIndex" />
    </transition>
    <div class="flex justify-between items-center mt-auto">
      <button
        v-if="hasPreviousStep"
        class="button-secondary"
        @click.prevent="previousStep(previousStepName)"
      >
        {{ $t('navigation.previous') }}
      </button>

      <div class="flex-grow"></div>

      <button v-if="!isLastStep" class="button-primary" type="submit">
        <span v-if="isLoading" class="flex justify-center items-center">
          <SpinnerIcon />
        </span>

        <span v-else>{{
          isSecondLastStep ? $t('navigation.submit') : $t('navigation.next')
        }}</span>
      </button>
    </div>
  </form>
</template>
