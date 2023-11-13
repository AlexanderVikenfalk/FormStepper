<template>
  <div class="wizard-step-wrapper justify-center py-14">
    <div
      class="wizard-content-wrapper flex justify-between full max-w-sm bg-white rounded-lg my-20"
    >
      <div class="flex flex-col items-center pb-10">
        <img
          :src="store.filteredUserData.avatar_url"
          :alt="`${store.filteredUserData.name}'s avatar`"
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
        />
        <h5 class="mb-1 text-xl font-medium text-neutral-900">
          {{ store.filteredUserData.name }}
        </h5>
        <span class="text-sm text-neutral-500">{{
          store.filteredUserData.bio
        }}</span>
      </div>
      <div class="bg-neutral-50 p-4">
        <div class="flex items-center justify-between">
          <div class="flex flex-col items-center">
            <span class="font-bold">{{
              store.filteredUserData.followers
            }}</span>
            <span class="text-sm text-neutral-600">{{
              $t('wizard.step_content.git_hub_following')
            }}</span>
            <span class="text-sm text-neutral-600"></span>
          </div>
          <div class="flex flex-col items-center">
            <span class="font-bold">{{
              store.filteredUserData.following
            }}</span>
            <span class="text-sm text-neutral-600">{{
              $t('wizard.step_content.git_hub_following')
            }}</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="font-bold">{{
              store.filteredUserData.public_repos
            }}</span>
            <span class="text-sm text-neutral-600">{{
              $t('wizard.step_content.git_hub_repos')
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGitHubDataStore } from '@/stores/gitHubDataStore'

const store = useGitHubDataStore()
</script>
