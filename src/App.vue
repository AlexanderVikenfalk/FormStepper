<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="bg-neutral min-h-screen flex flex-col">
    <TheHeader />
    <component :is="$route.meta.layout || 'div'">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </component>
  </div>
</template>
