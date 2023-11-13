<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { useGithubUser } from '@/composables/useGithubUser'
import { useFormStore } from '@/stores/formStore'
import useWizardNavigation from '@/composables/useWizardNavigation'
import SpinnerIcon from '@/components/SpinnerIcon.vue'
import { stepSchema } from '@/utils/stepSchema'
import i18n from '@/i18n'

const formStore = useFormStore()
const { fetchUser, loading, error } = useGithubUser()

const {
  currentStepIndex,
  nextStep,
  previousStep,
  isLastStep,
  hasPreviousStep,
} = useWizardNavigation()

// Todo: see if validationschema can be made racrive
const currentSchema = computed(() => {
  return stepSchema[currentStepIndex.value].validationSchema
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
    return i18n.global.t('error.request_error')
  }
  return null
})

const { handleSubmit } = useForm({
  validationSchema: currentSchema,
  initialValues: formStore.formData,
  keepValuesOnUnmount: true,
})

const isUsernameStep = computed(() => currentStepIndex.value === 1)

const onSubmit = handleSubmit(async values => {
  // Update the form data with the new values.
  formStore.updateFormData(values)

  // TODO: Check username right away

  if (isUsernameStep.value) {
    // The GitHub username has been provided, fetch the GitHub user.
    await fetchUser(formStore.formData.userName) // Replace with actual property if different
  }

  if (!isLastStep.value) {
    nextStep(nextStepName.value)
  } else {
    formStore.resetFormData()
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div v-if="displayError" class="error-message">
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
        <span v-else>{{ $t('navigation.next') }}</span>
      </button>
    </div>
  </form>
</template>
