<script setup lang="ts">
import { defineProps } from "vue";

// Define props with validation if needed
const props = defineProps({
  isActive: Boolean,
  validationSchema: Object, // Optionally pass the validation schema for each step if needed
});
</script>

<template>
  <!-- Only render this step if it's active, determined by the isActive prop -->
  <div v-if="isActive">
    <slot />
  </div>
</template>
