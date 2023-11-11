import {defineStore} from 'pinia' // Define the form data structure with a TypeScript interface

// Define the form data structure with a TypeScript interface
interface FormData {
  firstName: string
  lastName: string
  userName: string
  email: string
  terms: boolean
}

export const useFormStore = defineStore('form', {
  state: (): { formData: FormData } => ({
    formData: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      terms: false,
    },
  }),
  actions: {
    updateFormData(newData: Partial<FormData>) {
      // Update formData with newData. This will only copy enumerable properties.
      this.formData = {
        ...this.formData,
        ...newData,
      }
    },
  },
})
