<script lang="ts" setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<template>
  <header>
    <nav class="px-4 lg:px-6 py-2.5 border-b-2 border-gray">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <router-link
          class="flex items-center justify-center w-1/5"
          to="/wizard"
        >
          <IconPresenter name="logo" />
        </router-link>
        <div class="flex items-center lg:order-2">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>
