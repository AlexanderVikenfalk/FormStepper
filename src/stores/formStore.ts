import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      terms: false,
    },
  }),
  actions: {
    updateFormData(newData) {
      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          this.formData[key] = newData[key];
        }
      }
    },
  },
});
