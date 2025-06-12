<script setup>
import { ref, reactive } from 'vue'
import Row from './Row.vue'

const props = defineProps({
  title:String,
  list: [{}]
})

const emit = defineEmits(['remove', 'complete'])


function onRemove(idx) {
  emit('remove', idx)
}

function onComplete(idx) {
  emit('complete', idx)
}

</script>

<template>
    <h1>{{title}}</h1>
    <table>
        <th>index</th>
        <th>title</th>
        <th>user</th>
        <th>assegnee</th>
        <th>timestamp</th>
        <th>done</th>
        <tbody
        >
            <Row v-for="item in list" :item="item" :key="item.idx"
                @remove="onRemove"
                @complete="onComplete"
            >
            </Row>
        </tbody>
    </table>
</template>

<style scoped>
    table {
        width: 80vw;
        height: 'auto';
    }

    th {
        background-color: lightgray;
    }

    td {
        border: 1px solid black;
    }

    .td-odd {
        filter: blur(0px);
    }

</style>