<template>
  <div class="flex flex-1 justify-center items-center container">
    <main class="bg-white w-3/5 shadow-md p-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import TheStepper from "@/components/TheStepper.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
