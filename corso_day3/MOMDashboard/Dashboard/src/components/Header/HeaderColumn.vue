<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>

<template>
  <div :class="{ 'onlyValue': !$slots.header }">

    <div class="haeder">
      <slot name="header">
      </slot>
    </div>
    <div class="value">
      <slot name="value">
      </slot>
    </div>
  </div>

</template>

<style scoped>
.haeder {
  text-align: left;
  font-size: 12px;
  color: #363F72;
}

.value {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

.columnBody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
}

.onlyValue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
