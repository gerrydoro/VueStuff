<script setup>
import { ref, reactive } from 'vue'

const props = defineProps<{
      msg: string, 
      starting_counter: {
        type: Number,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      increment: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    }>()

const wallet = reactive({
  username: 'fm245',
  password: '12345666'
})


const nameInternal = ref(props.name)
const count = ref(props.starting_counter)
const increment2 = ref(props.increment)
const timeout = 5000;

// setInterval(() => {
//   console.log("here", props.state, nameInternal);
//   if(props.state == true){
//     nameInternal.value += ".";
//     console.log("here");
//   }
// }, 6000);

const add = (a, b) => {
  return Number(a) + Number(b);
}

const adder = async() => {
  console.time("adder");
  console.log("this is count ",count);
  count.value = Number(count.value) + props.increment; 
  console.log(increment2.value*1000);
  let res = new_func().then((value)=> {
      console.log(res);
      count.value = add(1000,count.value);
      console.timeEnd("adder");
      res.then((value)=> {
        console.log("test2");
      })
  });
}

const new_func = async () => {
  console.time("async");
  count.value = add(6000,count.value);
  console.timeEnd("async");
  return 100;
}

</script>

<template>
  <hr/>
  <div class="card">
    <p>{{ nameInternal }} {{ msg }} {{ state }}</p>
    <input type="text" />
    <button class="button" type="button" @click="adder()">count is {{ count }} + {{ increment2 }} {{ increment }} starting from {{ starting_counter }}</button>
    <p>
      Edit {{ wallet.username }}  {{ wallet.password }}
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
