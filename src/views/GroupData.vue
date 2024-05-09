<template>
  <div class="grid grid-cols-2" v-if="isLoaded">
    <div class="border border-gray-500">
      <div class="text-2xl">Original</div>
      <pre class="text-left">{{userData}}</pre>
    </div>
    <div class="border border-gray-500">
      <div class="text-2xl">Grouping By Department</div>
      <pre class="text-left">{{departmentData}}</pre>
    </div>
  </div>
  <div v-else class="text-center">loading data..</div>
</template>
<script lang="ts">
import { defineComponent , Ref , ref , computed } from "vue";
interface User {
  limit: number,
  skip: number,
  total: number,
  users: []
}
export default defineComponent({

  setup(){
    const userData = ref<User[]>([]);
    const departmentData = ref(null);
    const isLoaded = ref(false);

    async function getUserApi() {
      try {
        isLoaded.value = false;
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          alert(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        isLoaded.value = true;
        userData.value = data['users'];
        groupDepartment();
      } catch (err) {
        isLoaded.value = false;
        alert('Error fetching data:' + err);
      }
    }
    function groupDepartment(){
      departmentData.value = userData.value.reduce((acc:any, user:any) => {
            const department = user?.company?.department || '';
            acc[department] = acc[department] || [];
            acc[department].push(user);
            return acc;
          }, {} as { [key: string]: []});
    }


    getUserApi();
    return {
      userData,
      isLoaded,
      departmentData
    }
  }
})
</script>
