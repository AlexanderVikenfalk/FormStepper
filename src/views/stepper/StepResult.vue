<template>
  <div class="wizard-step-wrapper">
    <!-- Use store data directly in the template -->
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <!-- Use filteredUserData directly -->
      {{ store.filteredUserData.followers }}

      <!-- Rest of your template -->
      <!-- ... -->
      <div class="flex flex-col items-center pb-10">
        <!-- Dynamically bind the image source and alt text -->
        <img
          :alt="store.filteredUserData.name"
          :src="store.filteredUserData.avatar_url"
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
        />
        <!-- Dynamically bind the user's name -->
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ store.filteredUserData.name }}
        </h5>
        <!-- Other dynamic user information -->
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGitHubDataStore } from "@/stores/gitHubDataStore";

const store = useGitHubDataStore();
</script>
