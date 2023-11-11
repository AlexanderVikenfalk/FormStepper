<script lang="ts">
export default {
  name: 'NotFound',
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 h-full"
  >
    <h1
      class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-warning-500"
    >
      404
    </h1>
    <p
      class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-warning-500 mt-4"
    >
      {{ $t('error.page_not_found.header') }}
    </p>
    <p class="text- mt-4 pb-4 border-b-2 text-center">
      {{ $t('error.page_not_found.description') }}
    </p>
    <router-link to="/" class="button-primary mt-4">
      {{ $t('navigation.home') }}
    </router-link>
  </div>
</template>
