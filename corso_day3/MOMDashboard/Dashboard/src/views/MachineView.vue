<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue'
import Template from '@/components/dashboard/Template.vue'
import Content from '@/components/dashboard/Content.vue'
import WorkOrderHeader from '@/components/WorkOrderHeader.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import { GetWorkCenterStatus } from 'momframeworkcorso3';
import type { WorkOrder } from 'momframeworkcorso3';

const route = useRoute();
const machineIds = <number[]>[]


const workOrderHeader = ref(<WorkOrder>{});
const nextOrderHeader = reactive(<WorkOrder>{});

const machineIdsOrigin = ref([28593, 30388, 28737]);

onMounted(() => {
  console.time('GetWorkCenterStatus')
  machineIds.push(Number(route.params.machineId));
  console.log('Machine IDs:', machineIds);
  // Initialize the auth store or any other setup logic
  GetWorkCenterStatus(machineIds).then((data) => {

    // Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
    workOrderHeader.value = data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader;
    Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);
    console.timeEnd('GetWorkCenterStatus')

  }).catch((error) => {
    console.error('Error fetching work center status:', error);
  }).finally(() => {
    setInterval(() => {

      GetWorkCenterStatus(machineIdsOrigin.value).then((data) => {
        const randomId = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        // Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
        workOrderHeader.value = data.data.GetWorkCenterStatusResult[randomId].CurrentOrderHeader;

        Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);
      }).catch((error) => {
        console.error('Error fetching work center status:', error);
      });

    }, 5000); // Fetch every 5 seconds
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
