<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="bg-neutral min-h-screen flex flex-col">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>
