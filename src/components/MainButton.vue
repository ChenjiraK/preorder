<script setup lang="ts">
  const props = defineProps({
    isDisable: Boolean,
  });
</script>

<template>
  <button class="text-white bg-a-green-5bba47 px-4 py-3 rounded-md w-full text-20 h-52px" :class="isDisable ? 'opacity-50' : ''">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
