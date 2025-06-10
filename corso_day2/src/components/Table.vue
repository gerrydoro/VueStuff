<script setup lang="ts">
import { ref, reactive } from 'vue'
import ItemToDo from '@/interfaces/todoInterfaces'
import Row from './Row.vue'

const props = defineProps<{
    title:String,
    list: ItemToDo[]
}>()

const emit = defineEmits(['remove', 'complete'])

function onRemove(idx:number) {
  emit('remove', idx)
}

function onComplete(idx:number) {
  emit('complete', idx)
}

</script>

<template>
    <h1>{{title}}</h1>
    <table class="table table-striped table-hover" style="width: 100% !important;">
        <th>index</th>
        <th>title</th>
        <th>user</th>
        <th>assegnee</th>
        <th>timestamp</th>
        <th>done</th>
        <tbody
        >
            <Row v-for="item in list" :item="item" :name="item.title" :key="item.idx"
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