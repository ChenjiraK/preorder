<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
});
</script>

<template>
  <div class="flex border rounded-md px-7 py-4 cursor-pointer" :class="isActive ? 'border-a-green-5bba47' : 'border-a-gray-dddddd'">
    <div class="mr-4">Icon</div>
    <div>
      <div class="text-20">บริการรับสินค้าหน้าร้าน</div>
      <div class="text-14 pt-2">จองเริ่มต้นเพียง ฿3,000.00 เท่านั้น</div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
