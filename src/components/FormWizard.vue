<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { useGithubUser } from '@/composables/useGithubUser'
import { useFormStore } from '@/stores/formStore'
import useWizardNavigation from '@/composables/useWizardNavigation'
import SpinnerIcon from '@/components/SpinnerIcon.vue'
import { stepSchema } from '@/utils/stepSchema' // make sure to import your stepSchema

const formStore = useFormStore()
const { fetchUser, loading, error } = useGithubUser()

const totalSteps = stepSchema.length // Total number of steps derived from stepSchema
const {
  currentStepIndex,
  nextStep,
  previousStep,
  isLastStep,
  hasPreviousStep,
} = useWizardNavigation(totalSteps)

const currentSchema = computed(() => {
  return stepSchema[currentStepIndex.value].validationSchema
})

const currentComponent = computed(() => {
  return stepSchema[currentStepIndex.value].component
})

const nextStepName = computed(() => {
  return stepSchema[currentStepIndex.value + 1].name
})

const previousStepName = computed(() => {
  return stepSchema[currentStepIndex.value - 1].name
})

const { handleSubmit } = useForm({
  validationSchema: currentSchema,
  initialValues: formStore.formData,
  // keepValuesOnUnmount: true,
})

const onSubmit = handleSubmit(async values => {
  formStore.updateFormData(values)
  if (!isLastStep.value) {
    nextStep(nextStepName.value)
  } else {
    // Do final submission work here
    // You might want to perform a final validation or submit the data to an API
    emit('submit', values) // Emit an event for the parent component
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <component :is="currentComponent" :key="currentStepIndex" />
    Current Step index {{ currentStepIndex }}

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
        {{ $t('navigation.next') }}
      </button>

      <button v-else-if="isLastStep" class="button-primary" type="submit">
        <span v-if="loading" class="flex justify-center items-center">
          <SpinnerIcon />
        </span>
        <span v-else> {{ $t('navigation.submit') }}</span>
      </button>
    </div>
  </form>
</template>
