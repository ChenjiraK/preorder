<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-3 size-content">
      <div class="m-4" >
        <div v-for="(item,index) in list" :key="index" class="mb-2">
          <MainButton @click="onClickItemList(item , index)">{{ item.name }}</MainButton>
        </div>
      </div>
      <div class="fruit m-2">
        <div class="thead">
          Fruit
        </div>
        <div v-for="(fruit,index) in fruitList" :key="'fruit_'+index" class="m-2">
          <MainButton @click="removeFruitList(index)">{{ fruit.name }}</MainButton>
        </div>
      </div>
      <div class="vegetable m-2">
        <div class="thead">
          Vegetable
        </div>
        <div v-for="(vegetable,index) in vegetableList" :key="'vegetable_'+index" class="m-2">
          <MainButton @click="removeVegetableList(index)">{{ vegetable.name }}</MainButton>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent , Ref , ref } from "vue";
import MainButton from "@/components/MainButton.vue";
interface Item {
  type: string;
  name: string;
}
export default defineComponent({
  components: {
    MainButton
  },
  setup(){
    /* eslint-disable */
    const fruitList: Ref<Item[]> = ref([]);
    const vegetableList: Ref<Item[]> = ref([]);
    const list: Ref<Item[]> = ref([
      {
        type: 'Fruit',
        name: 'Apple',
      },
      {
        type: 'Vegetable',
        name: 'Broccoli',
      },
      {
        type: 'Vegetable',
        name: 'Mushroom',
      },
      {
        type: 'Fruit',
        name: 'Banana',
      },
      {
        type: 'Vegetable',
        name: 'Tomato',
      },
      {
        type: 'Fruit',
        name: 'Orange',
      },
      {
        type: 'Fruit',
        name: 'Mango',
      },
      {
        type: 'Fruit',
        name: 'Pineapple',
      },
      {
        type: 'Vegetable',
        name: 'Cucumber',
      },
      {
        type: 'Fruit',
        name: 'Watermelon',
      },
      {
        type: 'Vegetable',
        name: 'Carrot',
      },
    ]);
    const timeout: number = 5000; //5 second

    function onClickItemList(item: Item, index: number): void {
      if (item.type.toLowerCase().includes('fruit')) {
        addFruitList(item);
        removeList(index);
        // countdown for delete fruit
        setTimeout(removeFruitList, timeout);
      } else if (item.type.toLowerCase().includes('vegetable')) {
        addVegetableList(item);
        removeList(index);
        // countdown for delete vegetable
        setTimeout(removeVegetableList, timeout);
      }
    }

    function addList(item: Item): void {
      list.value.push(item);
    }

    function removeList(index: number): void {
      if (!list.value.length) return;
      list.value.splice(index, 1);
    }

    function addFruitList(item: Item): void {
      fruitList.value.push(item);
    }

    function addVegetableList(item: Item): void {
      vegetableList.value.push(item);
    }

    function removeFruitList(index: number = 0): void {
      if (!fruitList.value.length) return;

      let item = fruitList.value[index];
      // add list
      addList(item);
      // delete first
      fruitList.value.splice(index, 1);
    }

    function removeVegetableList(index: number = 0): void {
      if (!vegetableList.value.length) return;
      let item = vegetableList.value[index];
      // add list
      addList(item);
      // delete vegetable
      vegetableList.value.splice(index, 1);
    }

    return {
      list,
      fruitList,
      vegetableList,
      onClickItemList,
      removeFruitList,
      removeVegetableList,
    }
  }
});
</script>
<style>
.fruit , .vegetable{
  border: 1px solid gray;
  min-height: 550px;
  .thead{
    padding: 10px 0;
    text-align: center;
    background-color: lightgray;
  }
}
.size-content{
  width: 100%;
  max-width: 1024px;
}
</style>
