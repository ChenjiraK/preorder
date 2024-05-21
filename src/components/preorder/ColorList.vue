<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
  text: String,
  color: String
});
</script>

<template>
  <div class="border rounded-md px-7 py-5 cursor-pointer grid justify-items-center" :class="isActive ? 'border-a-green-5bba47' : 'border-a-gray-dddddd'">
      <div class="w-10 h-10 rounded-full flex justify-center" :style="`background-color: #${color};`"></div>
      <div class="pt-4 text-14 text-center">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
