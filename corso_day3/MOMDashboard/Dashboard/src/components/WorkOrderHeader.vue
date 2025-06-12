<script setup lang="ts">
import type { WorkOrder } from 'momframeworkcorso3';
import { onMounted } from 'vue';

const props = defineProps<{
  orderHeader: WorkOrder;
}>();
onMounted(() => {
  // This will run when the component is mounted
  console.log('WorkOrderHeader component mounted with props:', props);
});

</script>
<template>
  <div class="grid text-center">
    <div class="g-col-4">.g-col-4</div>
    <div class="g-col-4">.g-col-4</div>
    <div class="g-col-4">.g-col-4</div>
  </div>
</template>
