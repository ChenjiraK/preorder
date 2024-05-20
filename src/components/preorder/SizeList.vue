<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  isActive: Boolean,
  size: String,
  price: Number
});

const unitSize = computed(()=>{
  if(props.size){
    return props.size.replace(/[^a-z]/gi, '');
  }
  return ''
})
const numberSize = computed(()=>{
  if(props.size){
    return props.size.replace(/[^0-9]/gi, '');
  }
  return ''
})
</script>

<template>
  <div class="text-center border rounded-md px-7 py-5 cursor-pointer" :class="isActive ? 'border-a-green-5bba47' : 'border-a-gray-dddddd'">
    <div>
      <span class="text-24">{{ numberSize }}</span>
      <span class="text-16">{{ unitSize }}</span>
    </div>
    <div class="pt-2 text-14">฿ {{ price }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
