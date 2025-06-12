<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue'
import Template from '@/components/dashboard/Template.vue'
import Content from '@/components/dashboard/Content.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
route.params.machineId = '12345'; // Example of setting a machineId, replace with actual logic if needed

</script>

<template>
  <Template>
    <template #header> cece è bello </template>
    <template #auxiliary>
      <Auxilary></Auxilary>
    </template>
    <template #content>
      <Content></Content>
    </template>
  </Template>
</template>
