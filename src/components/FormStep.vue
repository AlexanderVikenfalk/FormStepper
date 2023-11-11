<script setup lang="ts">
defineProps({
  isActive: Boolean,
})
</script>

<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>
