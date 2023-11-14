import { defineStore } from 'pinia'

interface FormData {
  firstName: string
  lastName: string
  userName: string
  email: string
  terms: boolean
}

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
