<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// When importing a new icon the name has to be updated here.
const props = defineProps<{
  name: "logo" | "nameData" | "terms" | "welcome";
}>();

// Vite doesn't support these kind of dynamic imports. Error is ignored until a fix is found.
const icon = defineAsyncComponent(
  () => import(`/src/assets/${props.name}.svg` /* @vite-ignore */),
);
</script>

<template>
  <component :is="icon || DefaultIcon" />
</template>
