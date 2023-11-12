<template>
  <TransitionWrapper>
    <component :is="currentComponent" />
  </TransitionWrapper>
</template>

<script setup>
import TransitionWrapper from '@/components/TransitionWrapper.vue'
import { defineProps } from 'vue'

const props = defineProps({
  currentComponent: Object,
})
</script>
