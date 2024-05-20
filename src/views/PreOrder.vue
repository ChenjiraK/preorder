<template>
    <Topbar></Topbar>
    <div v-if="isLoaded" class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 px-8 max-w-5xl">
        <div class="relative">
          <img class="image w-full" v-bind:src="imageUrl" @load="imageLoaded()"/>
          <div class="w-full bg-opacity-10 text-center rounded-lg" v-if="loadingImage">
              กำลังดาวโหลดรูปภาพ...
          </div>
        </div>
        <div class="height-content hide-scroll">
          <div>
              <div class="text-40 py-8">ซื้อ iPhone 13</div>
              <div class="text-24 pb-8">รุ่น</div>
              <div class="grid grid-cols-1 gap-4">
                <div v-for="(item, index) in modelList" :key="index + '_model'" @click="onClickSelectModel(item.model ,item.id)">
                  <ModelList :name="item.name" :price="item.price" :isActive="modelActiveId == item.id"></ModelList>
                </div>
              </div>
          </div>
          <div>
            <div class="text-24 py-8">สี</div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(item, index) in colorList" :key="index + '_color'" @click="onclickSelectColor(item.data, item.id)">
                <ColorList :text="item.color" :color="item.colorHex" :isActive="colorActiveId == item.id"></ColorList>
              </div>
            </div>
          </div>
          <div>
            <div class="text-24 py-8">ขนาด</div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(item, index) in sizeList" :key="index + '_size'" @click="onClickSelectSize(item.id)">
                <SizeList :size="item.size ? item.size : ''" :price="item.price" :isActive="selectId == item.id"></SizeList>
              </div>
            </div>
          </div>
          <div>
            <div class="text-24 py-8">คุณต้องการรับสินค้าด้วยวิธีใด</div>
            <div class="grid grid-cols-1 gap-4">
              <DeliveryList></DeliveryList>
              <DeliveryList></DeliveryList>
            </div>
          </div>
          <hr class="my-9">
          <MainButton :isDisable="isLoading" class="mb-8" @click="onSubmit()">
            ยืนยันการสั่งซื้อล่วงหน้า
          </MainButton>
        </div>
      </div>
    </div>
    <div v-else class="text-center pt-5">กำลังดาวโหลดข้อมูล...</div>
    <SuccessModal 
      v-if="showSuccessModal" 
      :show="showSuccessModal" 
      title="การสั่งซื้อล่วงหน้าสำเร็จ" 
      :msg="msg_success"
      @close="showSuccessModal = false">
    </SuccessModal>
</template>
  <script setup lang="ts">
  import Topbar from '@/components/Topbar.vue'
  import ModelList from '../components/preorder/ModelList.vue'
  import ColorList from "../components/preorder/ColorList.vue";
  import SizeList from "../components/preorder/SizeList.vue";
  import DeliveryList from "../components/preorder/DeliveryList.vue";
  import MainButton from "@/components/MainButton.vue";
  import SuccessModal from '../components/modal/SuccessModal.vue'
  import PreOrderApi from "@/service/PreOrderApi";
  import { onMounted, ref } from "vue";

  const isLoaded = ref(false);
  const isLoading = ref(false);
  const msg_success = ref('');
  const productList = ref<MainProductInterface[]>([]);
  const modelList = ref<ModelList[]>([])
  const colorList = ref<ColorList[]>([])
  const sizeList = ref<DataModelInterface[]>([])
  //active id
  const modelActiveId = ref<Number>(0)
  const colorActiveId = ref<Number>(0)
  const selectId = ref<Number>(0)
  const imageUrl = ref('')
  const loadingImage = ref(false)
  const showSuccessModal = ref(false);

  async function getPreOrder (){
    isLoaded.value = false
    await PreOrderApi.apiGetPreOrder().then(data=>{
      productList.value = data;
      isLoaded.value = true
    }).catch(err=>{
      isLoaded.value = true
      console.log(err)
    })
  }

  function initDefaultData (){
      //set active default
      setModelList();
      setColorList(modelList.value.length ? modelList.value[0].model : [])
      setSizeList(colorList.value.length ? colorList.value[0].data : [])
      modelActiveId.value = modelList.value.length ? modelList.value[0].id : 0 
      colorActiveId.value = colorList.value.length ? colorList.value[0].id : 0 
      selectId.value = sizeList.value.length ? sizeList.value[0].id : 0 
      imageUrl.value = sizeList.value.length ? sizeList.value[0].image_url : '' 
  }

  function imageLoaded(){
    loadingImage.value = false
  }

  function setModelList(){
    for (const [index, product] of productList.value.entries()){
      let item: ModelList = {
        id: index + 1,
        name: product.name ?? '',
        price: 0,
        model: product.model ?? []
      }
      if(product.model.length){
        if(product.model[0].data.length){
          item.price = product.model[0].data[0].price ?? 0
        }
      }
      modelList.value.push(item);
    }
    modelList.value = modelList.value.sort((a, b) => b.price - a.price);
  }

  function setColorList(modelList: ModelInterface[]){
    colorList.value = []
    for (const [index, model] of modelList.entries()){
      let item: ColorList = {
        id: index + 1,
        color : model.color ?? '',
        colorHex : model.color_hex ?? '',
        data: model.data ?? []
      }
      colorList.value.push(item);
    }
  }
  function setSizeList(dataList: DataModelInterface[]){
    sizeList.value = dataList
  }
  //#region action
  function onClickSelectModel(modelList: ModelInterface[], modelId:Number){
    loadingImage.value = true
    //filter color / size
    setColorList(modelList)
    setSizeList(colorList.value.length ? colorList.value[0].data : [])
    //default active
    modelActiveId.value = modelId
    colorActiveId.value = 1
    selectId.value = sizeList.value.length ? sizeList.value[0].id : 0
    imageUrl.value = sizeList.value.length ? sizeList.value[0].image_url : ''
  }
  function onclickSelectColor(dataList: DataModelInterface[], colorId:Number){
    loadingImage.value = true
    imageUrl.value = dataList.length ? dataList[0].image_url : ''
    //filter size
    setSizeList(dataList)
    //default active
    colorActiveId.value = colorId
    selectId.value = sizeList.value.length ? sizeList.value[0].id : 0 
  }
  function onClickSelectSize(sizeId: Number){
    selectId.value = sizeId
  }
  async function onSubmit(){
    isLoading.value = true
    await PreOrderApi.postPreOrder(selectId.value).then(()=>{
      isLoading.value = false
      msg_success.value = 'การชำระเงินของคุณสำเร็จแล้ว! <br> ตอนนี้เราจะส่งอีเมลยืนยันคำสั่งซื้อสำเร็จให้คุณ'
      showSuccessModal.value = true;
    }).catch(err=>{
      isLoading.value = false
      console.log(err)
    })
  }
  //#endregion action

  onMounted(async()=>{
    await getPreOrder()
    initDefaultData();
  })

  </script>
<style scoped lang="scss">
.image{
  margin-top: -50px;
}
.height-content{
  height: calc(100vh - 60px);
  overflow: scroll
}
.hide-scroll {
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
}
</style>
