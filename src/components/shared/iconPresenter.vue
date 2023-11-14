<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

type IconName = 'logo' | 'step_personal_data' | 'step_terms' | 'step_welcome'

const props = defineProps<{ name: IconName }>()

const icon = defineAsyncComponent(
  () =>
    import(
      /* @vite-ignore */
      `/src/assets/icons/${props.name}.svg?component`
    ),
)
</script>

<template>
  <component :is="icon" />
</template>
