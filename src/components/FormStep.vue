<script setup lang="ts">
import { defineProps } from 'vue'

// Define props to accept the current component
const props = defineProps({
  currentComponent: Object,
})
</script>

<template>
  <component :is="props.currentComponent" />
</template>
