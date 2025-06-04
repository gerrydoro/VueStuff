<script setup lang="ts">
import { ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import Row from './components/Row.vue'

const taskList = ref([
  { index: 1, title: "Pulire la macchinetta del caffè", done: false, timestamp: "Ieri", user: "Carlo", assignee: "Marco" },
  { index: 2, title: "Scrivere buon codice Vue", done: true, timestamp: "Ieri", user: "Carlb", assignee: "Marco" },
  { index: 3, title: "Mangiare cocco", done: false, timestamp: "Ieri", user: "Carlc", assignee: "Marco" },
  { index: 4, title: "Disimparare Vue", done: true, timestamp: "Ieri", user: "Carld", assignee: "Marco" },
  { index: 5, title: "Beccare la macchina di Francesco", done: false, timestamp: "Ieri", user: "Carle", assignee: "Marco" }
])

</script>
<template>

  <Table :taskList="taskList" :showDone="false"></Table>
  <Table :taskList="taskList" :showDone="true"></Table>

</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
