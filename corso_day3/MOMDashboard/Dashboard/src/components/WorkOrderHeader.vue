<script setup lang="ts">
import type { WorkOrder } from 'momframeworkcorso3';
import { onMounted } from 'vue';
import HeaderColumn from './Header/HeaderColumn.vue';

const props = defineProps<{
  orderHeader: WorkOrder;
  nextOrder: WorkOrder | null;
}>();
onMounted(() => {
  console.log('material:', props.orderHeader.OutputMaterial);
  // This will run when the component is mounted
});

</script>
<template>
  <div class="text-center">
    <div class="row">
      <div class="col columnBorder">
        <HeaderColumn>
          <template #value>
            {{ orderHeader.WorkOrderNumber }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Status
          </template>
          <template #value>
            {{ orderHeader.Status }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Work Order id
          </template>
          <template #value>
            {{ orderHeader.WorkOrderNumber }}
          </template>
        </HeaderColumn>

      </div>
      <div class="col-4 columnBorder">
        <HeaderColumn>
          <template #header>
            Material Description
          </template>
          <template #value>
            {{ orderHeader.OutputMaterial?.MaterialDescription }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Target Quantity
          </template>
          <template #value>
            {{ orderHeader.ProductionTotalInLUoM }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Total Quantity
          </template>
          <template #value>
            {{ orderHeader.ProductionDoneInLUoM }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Good Quantity
          </template>
          <template #value>
            {{ orderHeader.GoodMCCounter }}
          </template>
        </HeaderColumn>

      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            SAP conf.
          </template>
          <template #value>
            {{ orderHeader.ConfirmedQuantityInLUoM }}
          </template>
        </HeaderColumn>
      </div>


      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            Next WO
          </template>
          <template #value>
            {{ nextOrder?.Status }}
          </template>
        </HeaderColumn>
      </div>
      <div class="col columnBorder">
        <HeaderColumn>
          <template #header>
            {{ nextOrder?.WorkOrderNumber }}
          </template>
          <template #value>
            {{ nextOrder?.OutputMaterial?.MaterialDescription }}
          </template>
        </HeaderColumn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.columnBorder {
  border: 1px solid #ccc;
  padding: 1%;
}
</style>
