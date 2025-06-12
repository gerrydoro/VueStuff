<script setup>
import { ref } from 'vue'
import Table from './Table.vue'

const list = ref([
])


function removeItem(idx) {
  list.value = list.value.filter(item => item.idx !== idx)
}

function completeItem(idx) {
  const item = list.value.find(i => i.idx === idx)
  if (item) item.done = true
}

// function saveList() {
//     localStorage.setItem('list', JSON.stringify(list));
// }

// function loadList() {
//     const data = JSON.parse(localStorage.getItem('list'));
// }

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
  list.value.push({ ...newItem.value, idx })
  newItem.value = defaultItem;
}
</script>

<template>

    <p>{{newItem.title}}</p>

  <form @submit.prevent="addItem" class="form">
    <input v-model="newItem.title" placeholder="Title" required />
    <input v-model="newItem.user" placeholder="User" />
    <input v-model="newItem.assegnee" placeholder="Assegnee" />
    <input type="checkbox" v-model="newItem.done" />
    <button type="submit">Add</button>
  </form>

  <Table :list="list" title="TO-DO" @remove="removeItem" @complete="completeItem"/>
  <Table :list="list" title="DONE" @remove="removeItem" />
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
