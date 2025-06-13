<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue'
import Template from '@/components/dashboard/Template.vue'
import Content from '@/components/dashboard/Content.vue'
import WorkOrderHeader from '@/components/WorkOrderHeader.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
// import { GetWorkCenterSDAStatus, GetWorkCenterStatus } from 'momframeworkcorso3';
import type { WorkOrder } from 'momframeworkcorso3';
import { KTEWorker } from 'momframeworkcorso3';

const route = useRoute();
const machineIds = <number[]>[]

const workOrderHeader = ref(<WorkOrder>{});
const nextOrderHeader = reactive(<WorkOrder>{});

const machineIdsOrigin = ref([3672, 3673]);
const timeOut = 5000; // 5 seconds

const worker: KTEWorker = new KTEWorker();


// // const randomId = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
//       Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
//       // workOrderHeader.value = data.data.GetWorkCenterStatusResult[randomId].CurrentOrderHeader;

//       Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);




// const prova = data.data.GetWorkCenterSDAStatusResult[0].SecondaryUnitIds;
//       console.log('SDA Status:', prova);

function GetWorkCenterStatusFunction() {

  setInterval(() => {
    console.time('GetWorkCenterStatus cycle')

    worker.GetWorkCenterStatus(machineIds, timeOut);

  }, timeOut + 500);
}

function GetWorkCenterSDAStatusFunction() {
  setInterval(() => {
    console.time('GetWorkCenter SDA Status cycle')

    worker.GetWorkCenterSDAStatus(machineIdsOrigin.value, 2000);

  }, 2000 + 500);
}

onMounted(() => {
  console.time('GetWorkCenterStatus')
  machineIds.push(Number(route.params.machineId));
  console.log('Machine IDs:', machineIds);
  // Initialize the auth store or any other setup logic

  GetWorkCenterStatusFunction()

  GetWorkCenterSDAStatusFunction()
  // worker.onMessageCallback = (data) => console.log('Worker message callback:', data);

  worker.onMessage((data) => {
    console.log('Worker message:', data)
  });

});

</script>

<template>
  <Template>
    <template #header>
      <WorkOrderHeader :nextOrder="nextOrderHeader" :orderHeader="workOrderHeader"></WorkOrderHeader>
    </template>
    <template #auxiliary>
      <Auxilary></Auxilary>
    </template>
    <template #content>
      <Content></Content>
    </template>
  </Template>
</template>
