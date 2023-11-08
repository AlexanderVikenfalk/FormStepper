<!-- StepOneComponent.vue -->
<script setup lang="ts">
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
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper">
      <icon name="step_welcome"></icon>
    </div>
    <article class="wizard-content-wrapper">
      <h1>Welcome to GitHub Profiler!</h1>
      <p class="mb-5">
        Let's get started. In just a few steps, you'll be viewing the GitHub
        details for any user you want to check out.
      </p>
      <ol>
        <li>
          <h2>1. Tell us about yourself</h2>
          <p class="px-5">Share some basic info, like your name.</p>
        </li>
        <li>
          <h2>2. Fill in your email & agree to terms</h2>
          <p class="px-5">
            Enter your email address and accept the user agreement to proceed.
          </p>
        </li>
        <li>
          <h2>3. View your GitHub profile</h2>
          <p class="px-5">
            Take a peek at the GitHub stats and profile details.
          </p>
        </li>
      </ol>
    </article>
  </div>
</template>
