<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  msg: {
    type: String,
    required: true
  }
  starting_counter: {
    type: Number,
    required: true
  }
  increment: {
    type: Number,
    required: true
  }
}>()

const count = ref(props.starting_counter)
const increment2 = ref(props.increment)

const adder = () => {
  console.log("this is count ", count.value)
  count.value = Number(count.value) + Number(props.increment)
}

const ciaoMamma = async () => {
  alert("ciao mamma guarda come mi diverto ")
}

</script>

<template>
  <hr/>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="adder()">count is {{ count }} + {{ increment2 }} starting from {{ props.starting_counter }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
