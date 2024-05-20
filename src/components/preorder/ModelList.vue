<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
  name: String,
  price: Number
});
</script>

<template>
  <div class="flex border rounded-md px-5 py-7 content-center cursor-pointer" :class="isActive ? 'border-a-green-5bba47' : 'border-a-gray-dddddd'">
    <div>{{ name }}</div>
    <div class="ml-auto font-light">฿ {{ price }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
