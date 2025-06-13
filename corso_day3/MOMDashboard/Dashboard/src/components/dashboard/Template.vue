<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>
<template>
  <div class="sticky-top header">
    <slot name="header"> </slot>
  </div>
  <div class="row">
    <div class="col-md-4">
      <slot name="auxiliary"> </slot>
    </div>
    <div class="col-md-8">
      <slot name="content"> </slot>
    </div>
  </div>
</template>
<style scoped>
.header {
  background-color: darkgray;
}

.container {
  display: grid;
}
</style>
