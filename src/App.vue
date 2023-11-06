<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>


<template>
  <div class="min-h-screen w-full bg-neutral flex justify-center items-center">
    <component :is="$route.meta.layout || 'div'">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

