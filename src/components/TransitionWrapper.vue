<template>
  <transition
    name="fade"
    mode="out-in"
    enter-active-class="transition-opacity duration-900 ease-in"
    leave-active-class="transition-opacity duration-900 ease-out"
  >
    <slot></slot>
  </transition>
</template>
