import {defineStore} from 'pinia' // Define the form data structure with a TypeScript interface

// Define the form data structure with a TypeScript interface
interface FormData {
  firstName: string
  lastName: string
  userName: string
  email: string
  terms: boolean
}

// Define initial state as a function to reuse it for resetting state
function initialState(): FormData {
  return {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    terms: false,
  }
}

export const useFormStore = defineStore('form', {
  state: (): { formData: FormData } => ({
    formData: initialState(),
  }),
  actions: {
    updateFormData(newData: Partial<FormData>) {
      // Update formData with newData. This will only copy enumerable properties.
      this.formData = {
        ...this.formData,
        ...newData,
      }
    },
    resetFormData() {
      this.formData = initialState()
    },
  },
})
