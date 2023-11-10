<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";
import { useFormStore } from "@/stores/useFormStore"; // Make sure this path is correct

// Use your Pinia store to manage form data
const formStore = useFormStore();
</script>

<template>
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper pr-4">
      <icon name="step_terms"></icon>
    </div>

    <article class="wizard-content-wrapper">
      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="email">{{
          $t("wizard.email")
        }}</label>
        <Field
          id="email"
          v-model="formStore.formData.email"
          :placeholder="
            $t('wizard.placeholders.email', {
              account: 'axel',
              domain: 'springer.de',
            })
          "
          class="wizard-input"
          name="email"
          type="email"
        />
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="email" />
        </div>
      </div>

      <div class="wizard-input-wrapper">
        <div class="wizard-input-label flex items-center">
          <Field
            id="terms"
            v-model="formStore.formData.terms"
            :value="true"
            class="wizard-checkbox"
            name="terms"
            type="checkbox"
          />
          <label class="inline-block ml-2" for="terms">{{
            $t("wizard.agree_to_terms")
          }}</label>
        </div>
        <div class="wizard-input-error-wrapper">
          <ErrorMessage class="wizard-input-error" name="terms" />
        </div>
      </div>
    </article>
  </div>
</template>
