<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue'
import Template from '@/components/dashboard/Template.vue'
import Content from '@/components/dashboard/Content.vue'
import WorkOrderHeader from '@/components/WorkOrderHeader.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { GetWorkCenterStatus } from 'momframeworkcorso3';
import type { WorkOrder } from 'momframeworkcorso3';

const route = useRoute();
const machineIds = <number[]>[]


const workOrderHeader = reactive(<WorkOrder>{});
const nextOrderHeader = reactive(<WorkOrder>{});

onMounted(() => {
  machineIds.push(Number(route.params.machineId));
  console.log('Machine IDs:', machineIds);
  // Initialize the auth store or any other setup logic
  GetWorkCenterStatus(machineIds).then((data) => {

    Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
    Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);

  }).catch((error) => {
    console.error('Error fetching work center status:', error);
  }).finally(() => {
    setInterval(() => {

      GetWorkCenterStatus(machineIds).then((data) => {
        console.log('first data:', data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
        Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
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
