<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useForm } from 'vee-validate'
import { useGithubUser } from '@/composables/useGithubUser'
import { useFormStore } from '@/stores/formStore'
import { stepValidationSchema } from '@/utils/stepValidationSchema.ts'
import SpinnerIcon from '@/components/SpinnerIcon.vue'

const formStore = useFormStore()
const { fetchUser, loading, error } = useGithubUser()

const currentStepIndex = ref(0)
const currentStep = computed(() => stepValidationSchema[currentStepIndex.value])
const currentValidationSchema = computed(
  () => currentStep.value.validationSchema,
)

// Set up form context with vee-validate using the current validation schema
const { handleSubmit } = useForm({
  validationSchema: currentValidationSchema,
  initialValues: formStore.formData, // Use Pinia state for initial values
})

// Define submit logic
const onSubmit = handleSubmit(async values => {
  formStore.updateFormData(values)
  // Update Pinia state with current form values

  // Check if it's the second last step and ready to submit
  if (currentStepIndex.value === stepValidationSchema.length - 2) {
    await fetchUser(formStore.formData.userName) // Fetch GitHub user using the username from Pinia state
    // Check for errors after awaiting the fetchUser call
    if (!loading.value && !error.value) {
      // This condition ensures that we move to the next step only if no error occurred
      currentStepIndex.value++
    }
  } else if (currentStepIndex.value < stepValidationSchema.length - 2) {
    // If it's not the time to submit yet, simply go to the next step
    currentStepIndex.value++
  }
})

// Define previous step logic
const onPrevious = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <!-- Dynamically render the current step component -->
    <component :is="currentStep.component" :key="currentStepIndex" />

    <!-- Buttons to navigate steps -->
    <div class="flex justify-between items-center mt-auto">
      <!-- Show "Previous" button if not on the first step -->
      <button
        v-if="currentStepIndex > 0"
        class="button-secondary"
        @click.prevent="onPrevious"
      >
        Previous
      </button>

      <!-- Grow the space between buttons -->
      <div class="flex-grow"></div>

      <!-- Show "Next" button if on a step before the second last step -->
      <button
        v-if="currentStepIndex < stepValidationSchema.length - 2"
        class="button-primary"
        type="submit"
      >
        Next
      </button>

      <!-- Show "Submit" button if on the second last step -->
      <button
        v-else-if="currentStepIndex === stepValidationSchema.length - 2"
        class="button-primary"
        type="submit"
      >
        <!-- Display spinner when loading -->
        <span v-if="loading" class="flex justify-center items-center">
          <SpinnerIcon />
        </span>

        <span v-else>Submit</span>
      </button>
    </div>
  </form>
</template>
