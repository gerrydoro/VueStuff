<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import KTEModal from '../modals/KTEModal.vue';
import { useUserPrefsStore } from '@/stores/UserPrefsStore';
import { GetWorkCenterStatus } from 'momframeworkcorso3'


const isModalOpen = ref(false);

const machineIds = ref([28712, 30388, 28737]);
onMounted(() => {
  // This is where you can perform any setup logic when the component is mounted
  console.log('App mounted');

  GetWorkCenterStatus(machineIds.value).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error('Error fetching work center status:', error);
  });

});

onUpdated(() => {
  // This will log every time the component is updated
  console.log(isModalOpen.value);
});
</script>

<template>
  <div class="card newCard">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <KTEModal :show=isModalOpen></KTEModal>

  </div>
</template>
<style scoped>
.newCard {
  margin: 1rem;
  height: 85vh;
  width: 60vw;
}
</style>
