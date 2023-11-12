<script lang="ts" setup>
import FormWizard from '@/components/FormWizard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <div class="layout-base-wrapper">
    <main class="layout-wizard">
      <ProgressBar />

      <FormWizard class="min-height-full height-full" />
    </main>
  </div>
</template>
