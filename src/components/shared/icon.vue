<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// When importing a new icon the name has to be updated here.
const props = defineProps<{
  name: "logo" | "step_personal_data" | "step_terms" | "step_welcome";
}>();

// Vite doesn't support these kind of dynamic imports. Error is ignored until a fix is found.
const icon = defineAsyncComponent(
  () => import(`/src/assets/icons/${props.name}.svg` /* @vite-ignore */),
);
</script>

<template>
  <component :is="icon" />
</template>
