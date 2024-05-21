<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
});
</script>

<template>
  <div class="flex border rounded-md px-7 py-4 cursor-pointer" :class="isActive ? 'border-a-green-5bba47' : 'border-a-gray-dddddd'">
    <div class="mr-4"><slot name="icon"></slot></div>
    <div>
      <div class="text-20 font-semibold"><slot name="title"></slot></div>
      <div class="text-14 pt-2"><slot name="detail"></slot></div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
