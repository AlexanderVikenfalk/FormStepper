<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { useGithubUser } from '@/composables/useGithubUser'
import { useFormStore } from '@/stores/formStore'
import useWizardNavigation from '@/composables/useWizardNavigation'
import SpinnerIcon from '@/components/SpinnerIcon.vue'
import { stepSchema } from '@/utils/stepSchema'
import FormStep from '@/components/FormStep.vue' // make sure to import your stepSchema

const formStore = useFormStore()
const { fetchUser, loading, error } = useGithubUser()

const {
  currentStepIndex,
  nextStep,
  previousStep,
  isLastStep,
  hasPreviousStep,
} = useWizardNavigation()

const currentSchema = computed(() => {
  return stepSchema[currentStepIndex.value].validationSchema
})

const currentComponent = computed(() => {
  return stepSchema[currentStepIndex.value].component
})

const nextStepName = computed(() => {
  if (!isLastStep) {
    return stepSchema[currentStepIndex.value - 1].name
  }
  return stepSchema[currentStepIndex.value + 1].name
})

const previousStepName = computed(() => {
  if (currentStepIndex.value >= 0) {
    return stepSchema[currentStepIndex.value - 1].name
  }
})

const { handleSubmit } = useForm({
  validationSchema: currentSchema,
  initialValues: formStore.formData,
})

const onSubmit = handleSubmit(async values => {
  formStore.updateFormData(values)
  if (!isLastStep.value) {
    nextStep(nextStepName.value)
  }
  if (isLastStep.value) {
    formStore.resetFormData()
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormStep :current-component="currentComponent" />
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
        <span v-if="loading" class="flex justify-center items-center">
          <SpinnerIcon />
        </span>
        <span>{{ $t('navigation.next') }}</span>
      </button>
    </div>
  </form>
</template>
