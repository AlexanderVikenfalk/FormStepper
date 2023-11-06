<template>
  <div class="bg-white w-4/5 h-[80vh] shadow-md flex flex-col" >
    <header class="w-full border-b">

    </header>
    <main class=" flex flex-row p-8 flex-auto">
      <slot/>
    </main>
<!--    <TheFooter />-->
  </div>
</template>

<script setup>
import TheStepper from "@/components/TheStepper.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
