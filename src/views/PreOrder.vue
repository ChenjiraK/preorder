<template>
    <Topbar></Topbar>
    <div class="px-8">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img class="relative image w-full h-full" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842710000" />
        </div>
        <div class="height-content overscroll-y-auto">
          <div>
              <div class="text-40 py-8">ซื้อ iPhone 13</div>
              <div class="text-24 pb-8">รุ่น</div>
              <div class="grid grid-cols-1 gap-4">
                <ModelList></ModelList>
                <ModelList></ModelList>
                <ModelList></ModelList>
                <ModelList></ModelList>
              </div>
          </div>
          <div>
            <div class="text-24 py-8">สี</div>
            <div class="grid grid-cols-2 gap-4">
              <ColorList></ColorList>
              <ColorList></ColorList>
              <ColorList></ColorList>
              <ColorList></ColorList>
            </div>
          </div>
          <div>
            <div class="text-24 py-8">ขนาด</div>
            <div class="grid grid-cols-2 gap-4">
              <SizeList></SizeList>
              <SizeList></SizeList>
              <SizeList></SizeList>
              <SizeList></SizeList>
            </div>
          </div>
          <div>
            <div class="text-24 py-8">คุณต้องการรับสินค้าด้วยวิธีใด</div>
            <div class="grid grid-cols-1 gap-4">
              <DeliveryList></DeliveryList>
              <DeliveryList></DeliveryList>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  <script lang="ts">
  import Topbar from '@/components/Topbar.vue'
  import ModelList from '@/components/preorder/ModelList.vue'
  import ColorList from "@/components/preorder/ColorList.vue";
  import SizeList from "@/components/preorder/SizeList.vue";
  import DeliveryList from "@/components/preorder/DeliveryList.vue";

  import { defineComponent , Ref , ref , computed } from "vue";
  export default defineComponent({
    components:{
        Topbar,
        ModelList,
        ColorList,
        SizeList,
        DeliveryList
    }
  })
  </script>
<style scoped lang="scss">
.image{
  margin-top: -150px;
}
.height-content{
  height: calc(100vh - 60px);
}
</style>
