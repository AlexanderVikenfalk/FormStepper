<template>
  <div class="flex flex-1 justify-center items-center">
    <div class="bg-white w-4/5 shadow-md">
      <main class="p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import TheStepper from "@/components/TheStepper.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
