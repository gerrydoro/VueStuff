<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue';


// const usePrefStore = useUserPrefsStore();
// const useAuthStoress = useAuthStore();


onMounted(() => {
  // This is where you can perform any setup logic when the component is mounted
  console.log('App mounted');
  // setInterval(async () => {
  //   console.time('Clock Auxiliary Update');
  //   await useAuthStoress.login('admin', 'password'); // Example of using the auth store
  //   console.timeEnd('Clock Auxiliary Update');
  //   usePrefStore.clock++;
  // }, 2000);

});

</script>
<template>
  <div class="card newCard" style="width: 18rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
  </div>
</template>
<style scoped>
.newCard {
  margin: 1rem;
  height: 85vh;
}
</style>
