<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

// When importing a new icon the name has to be updated here.
const props = defineProps<{
  name: 'logo' | 'step_personal_data' | 'step_terms' | 'step_welcome'
}>()

const icon = defineAsyncComponent(
  () => import(`/src/assets/icons/${props.name}.svg`),
)
</script>

<template>
  <component :is="icon" />
</template>
