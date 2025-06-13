<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue'
import Template from '@/components/dashboard/Template.vue'
import Content from '@/components/dashboard/Content.vue'
import WorkOrderHeader from '@/components/WorkOrderHeader.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import { GetWorkCenterSDAStatus, GetWorkCenterStatus } from 'momframeworkcorso3';
import type { WorkOrder } from 'momframeworkcorso3';

const route = useRoute();
const machineIds = <number[]>[]


const workOrderHeader = ref(<WorkOrder>{});
const nextOrderHeader = reactive(<WorkOrder>{});

const machineIdsOrigin = ref([3672, 3673]);
const timeOut = 5000; // 5 seconds

const worker = new Worker(new URL('./workers/Worker.js', import.meta.url), {
  type: 'module'
});


worker.onmessage = (e) => {
  if (e.data.success) {
    console.log('✅ API response:', e.data.data);
  } else {
    console.error('❌ API error:', e.data.error, 'Status:', e.data.status);
  }
};

// Esempio: GET request
worker.postMessage({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'get'
});

function GetWorkCenterStatusFunction() {
  GetWorkCenterStatus(machineIds, timeOut).then((data) => {
    console.time('GetWorkCenterStatus')
    // Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
    // workOrderHeader.value = data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader;
    Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);

  }).catch((error) => {
    console.error('Error fetching work center status:', error);
  }).finally(() => {
    console.timeEnd('GetWorkCenterStatus')

    setInterval(() => {
      console.time('GetWorkCenterStatus cycle')

      GetWorkCenterStatus(machineIds, timeOut).then((data) => {
        // const randomId = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
        // workOrderHeader.value = data.data.GetWorkCenterStatusResult[randomId].CurrentOrderHeader;

        Object.assign(nextOrderHeader, data.data.GetWorkCenterStatusResult[0].NextOrderHeader);

      }).catch((error) => {
        console.error('Error fetching work center status:', error);
      }).finally(() => {
        console.timeEnd('GetWorkCenterStatus cycle')
      });

    }, timeOut + 500); // Fetch every 5 seconds
  });
}


function GetWorkCenterSDAStatusFunction() {
  GetWorkCenterSDAStatus(machineIds, 2000).then((data) => {
    console.time('GetWorkCenter SDA Status')
    // Object.assign(workOrderHeader, data.data.GetWorkCenterStatusResult[0].CurrentOrderHeader);
    const prova = data.data.GetWorkCenterSDAStatusResult[0].SecondaryUnitIds;
    console.log('SDA Status:', prova);
  }).catch((error) => {
    console.error('Error fetching work center status:', error);
  }).finally(() => {
    console.timeEnd('GetWorkCenter SDA Status')

    setInterval(() => {
      console.time('GetWorkCenter SDA Status cycle')

      GetWorkCenterSDAStatus(machineIdsOrigin.value, 2000).then((data) => {
        const prova = data.data.GetWorkCenterSDAStatusResult[0].SecondaryUnitIds;
        console.log('SDA Status:', prova);

      }).catch((error) => {
        console.error('Error fetching work center status:', error);
      }).finally(() => {
        console.timeEnd('GetWorkCenter SDA Status cycle')
      });

    }, 2000 + 500); // Fetch every 5 seconds
  });
}

onMounted(() => {
  console.time('GetWorkCenterStatus')
  machineIds.push(Number(route.params.machineId));
  console.log('Machine IDs:', machineIds);
  // Initialize the auth store or any other setup logic

  worker.postMessage({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    data: { title: 'foo', body: 'bar', userId: 1 }
  });



  // GetWorkCenterStatusFunction()

  // GetWorkCenterSDAStatusFunction()

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
