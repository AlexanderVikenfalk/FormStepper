<script lang="ts" setup>
import { ErrorMessage, Field } from 'vee-validate'
import { useFormStore } from '@/stores/formStore.ts'
import { useRequiredLabel } from '@/composables/useRequiredLabel.ts'

const firstNameLabel = useRequiredLabel('first_name', true)
const lastNameLabel = useRequiredLabel('last_name', true)
const userNameLabel = useRequiredLabel('user_name', true)
const formStore = useFormStore()
</script>

<template>
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper pr-4">
      <icon name="step_personal_data" />
    </div>
    <article class="wizard-content-wrapper">
      <div class="wizard-input-wrapper">
        <label class="wizard-input-label" for="firstName">
          {{ firstNameLabel }}
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
          {{ lastNameLabel }}
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
          {{ userNameLabel }}
        </label>
        <Field
          id="userName"
          v-model="formStore.formData.userName"
          :placeholder="$t('wizard.placeholders.user_name')"
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
