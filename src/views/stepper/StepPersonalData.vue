<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import { useFormStore } from "@/stores/useFormStore"; // Make sure this path is correct

// Use your Pinia store to manage form data
const formStore = useFormStore();

// Remove the separate script block that was here before as it's not needed anymore
</script>

<template>
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper pr-4">
      <icon name="step_personal_data" />
    </div>
    <article class="wizard-content-wrapper">
      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="firstName">
          {{ $t("wizard.labels.first_name") }}
        </label>
        <Field
          id="firstName"
          v-model="formStore.formData.firstName"
          :placeholder="$t('wizard.placeholders.first_name')"
          class="wizard-input"
          name="firstName"
          type="text"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="firstName" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="lastName">
          {{ $t("wizard.labels.last_name") }}
        </label>
        <Field
          id="lastName"
          v-model="formStore.formData.lastName"
          :placeholder="$t('wizard.placeholders.last_name')"
          class="wizard-input"
          name="lastName"
          type="text"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="lastName" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="userName">
          {{ $t("wizard.labels.github_username") }}
        </label>
        <Field
          id="userName"
          v-model="formStore.formData.userName"
          :placeholder="$t('wizard.placeholders.github_username')"
          class="wizard-input"
          name="userName"
          type="text"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="userName" />
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
