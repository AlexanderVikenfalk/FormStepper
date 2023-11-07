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
      <icon name="welcome"></icon>
    </div>
    <article class="flex flex-col items-center justify-center w-1/2">
      <h1>Welcome</h1>
      <p>This application will take you through 3 steps.</p>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </article>
  </div>
  <Field class="invisible" name="dummyField" type="text" />
</template>
