<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps<{
  name: string
}>()

// Vite doesn't support these kind of dynamic imports. Error is ignored until a fix is found.
const icon = defineAsyncComponent(() =>
    import(`/src/assets/${props.name}.svg`/* @vite-ignore */)
);
</script>

<template>
  <component :is="icon" />
</template>
