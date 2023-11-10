<template>
  <svg
    class="animate-spin h-5 w-5 text-neutral-950"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      d="M4 12a8 8 0 0116 0H4z"
      fill="currentColor"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "SpinnerIcon",
};
</script>
