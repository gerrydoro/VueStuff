<script setup lang="ts">
import Auxilary from '@/components/dashboard/Auxilary.vue';
import Template from '@/components/dashboard/Template.vue';
import Content from '@/components/dashboard/Content.vue';
</script>

<template>
  <Template>
    <template #header>
      cece è bello
    </template>
    <template #auxiliary>
      <Auxilary></Auxilary>
    </template>
    <template #content>
      <Content></Content>
    </template>
  </Template>

</template>
