<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 h-full"
  >
    <p
      class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-red-500"
    >
      404
    </p>
    <p
      class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-red-500 mt-4"
    >
      Page Not Found
    </p>
    <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">
      Sorry, the page you are looking for could not be found.
    </p>
    <span>Return Home</span>
  </div>
</template>
