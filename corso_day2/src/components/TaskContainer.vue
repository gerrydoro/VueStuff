<script setup lang="ts">
import { computed, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'
import ItemToDo, { ItemToDoNext } from '@/interfaces/todoInterfaces'
import Table from './Table.vue'
import Skeleton from './skeleton.vue';
import About from './About.vue';

const list = ref<ItemToDo[]>([]);
const pageIdx = ref<number>(0);

let item = ref(<ItemToDo>({
  idx: 10000
}));

const tables = <Number[]>(
  [
    0, 1
  ]
)

const num1 = 18000;
const num2 = ref<number>(0);

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("updated");
})

onMounted(() => {
  console.log("mounted");
})

onUnmounted(() => {
  console.log("unmounted");
});

watch(list.value, (oldList: ItemToDo[], newList: ItemToDo[]) => {
  console.log(oldList, newList, 'watch')
});

let listLength = computed(() => {
  return list.value.length;
});

console.log(num1, num2.value, Number);

function changePage(idx: number) {
  pageIdx.value = idx;
}

function removeItem(idx: number) {
  list.value = list.value.filter(item => item.idx !== idx)
}


function completeItem(idx: number) {
  const item = list.value.find(i => i.idx === idx)
  if (item) item.done = true
}

const defaultItem = {
  title: '',
  user: '',
  assegnee: '',
  done: false,
  timestamp: new Date().toISOString().slice(0, 16),
}

const newItem = ref({
  title: '',
  user: '',
  assegnee: '',
  done: false,
  timestamp: new Date().toISOString().slice(0, 16),
})

function addItem() {
  if (!newItem.value.title) return
  const idx = list.value.length ? Math.max(...list.value.map(i => i.idx)) + 1 : 0
  list.value.push({
    ...newItem.value, idx,
    assignee: "any"
  })
  newItem.value = defaultItem;
}
</script>

<template>
  <div>
    <form @submit.prevent="addItem" class="form">
      <input v-model="newItem.title" placeholder="Title" required />
      <input v-model="newItem.user" placeholder="User" />
      <input v-model="newItem.assegnee" placeholder="Assegnee" />
      <input type="checkbox" v-model="newItem.done" />
      <button type="submit">Add</button>
    </form>

    <Table :list="list.filter((x) => x.done !== true)" title="TO-DO" @remove="removeItem" @complete="completeItem" />
    <Table :list="list.filter((x) => x.done === true)" title="DONE" @remove="removeItem" />
  </div>
</template>

<style scoped>
.form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

input {
  padding: 6px;
}

button {
  padding: 6px 12px;
}
</style>
