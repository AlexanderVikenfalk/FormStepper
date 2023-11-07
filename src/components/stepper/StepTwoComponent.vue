<!-- StepOneComponent.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Field, ErrorMessage } from "vee-validate";

// Define the props if any data is needed from the parent component
defineProps({
  // ... any props passed from the parent
});

defineEmits(["update:modelValue"]); // if the step needs to emit events

// Logic for StepOneComponent
// ...
</script>

<template>
  <div class="flex">
    <div class="flex items-center justify-center w-1/2">
      <icon name="nameData"></icon>
    </div>
    <article class="flex flex-col justify-center w-1/2">
      <div class="p-2 mt-1">
        <label class="wizard-input-label" for="firstName">{{
          $t("wizard.first_name")
        }}</label>

        <Field
          class="wizard-input"
          name="firstName"
          type="text"
          placeholder="Axel"
        />
        <div class="h-4 mt-2">
          <ErrorMessage class="wizard-input-error" name="firstName" />
        </div>
      </div>

      <div class="p-2 mt-1">
        <label class="wizard-input-label" for="lastName"> Last name</label>
        <Field
          class="wizard-input"
          name="lastName"
          type="text"
          placeholder="Springer"
        />
        <div class="h-4">
          <ErrorMessage class="wizard-input-error" name="lastName" />
        </div>
      </div>

      <div class="p-2 mt-1">
        <label class="wizard-input-label" for="firstName">
          Github user name</label
        >
        <Field
          class="wizard-input"
          name="userName"
          type="text"
          placeholder="Caesar"
        />
        <div class="h-4">
          <ErrorMessage class="wizard-input-error" name="userName" />
        </div>
      </div>
    </article>
  </div>
</template>
