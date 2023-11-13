<script lang="ts" setup>
import * as yup from 'yup' // This line was missing and is required for yup to be recognized
import { useForm } from 'vee-validate'
import { useGithubUser } from '@/composables/useGithubUser'
import { useFormStore } from '@/stores/formStore'
import useWizardNavigation from '@/composables/useWizardNavigation'
import SpinnerIcon from '@/components/SpinnerIcon.vue'
import { useValidationSchema } from '@/composables/useValidationSchema'
import { stepSchema } from '@/utils/stepSchema'

const formStore = useFormStore()
const { fetchUser, loading, error } = useGithubUser()

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

// Use the step index to access the current step's validation schema
const currentSchema = computed(() => {
  const stepName = stepSchema[currentStepIndex.value].name // "StepWelcome", "StepPersonalData", etc.
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
  // keepValuesOnUnmount: true,
})

const isUsernameStep = computed(() => currentStepIndex.value === 1)

const onSubmit = handleSubmit(async values => {
  // Update the form data with the new values.
  formStore.updateFormData(values)

  // TODO: Check username right away

  // we will fetch github user data and set it in state as soon as possible
  if (isUsernameStep.value) {
    await fetchUser(formStore.formData.userName)
  }

  if (!isLastStep.value) {
    nextStep(nextStepName.value)
  }

  // Reset the form data when we leave the second last step
  if (isSecondLastStep) {
    formStore.resetFormData()
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-if="displayError" class="wizard-network-error">
      {{ displayError }}
    </div>
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <!-- Dynamic component with :is and :key -->
      <!-- The key change is what triggers the transition -->
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
        <!-- Show spinner when loading is true -->
        <span v-if="loading" class="flex justify-center items-center">
          <SpinnerIcon />
        </span>
        <!-- Show "Next" text when loading is false -->
        <span v-else>{{
          isSecondLastStep ? $t('navigation.submit') : $t('navigation.next')
        }}</span>
      </button>
    </div>
  </form>
</template>
