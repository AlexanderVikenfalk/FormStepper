<template>
  <transition
    name="fade"
    mode="out-in"
    enter-active-class="transition-opacity duration-300 ease-in"
    leave-active-class="transition-opacity duration-300 ease-out"
    enter-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <slot></slot>
  </transition>
</template>
