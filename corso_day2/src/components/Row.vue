<script setup lang="ts">
import { ref, reactive } from 'vue'
import ItemToDo from '@/interfaces/todoInterfaces'

export interface RowProps {
    item: ItemToDo,
    name: string
}

const props = defineProps<RowProps>();

const emit = defineEmits(['remove', 'complete'])

function remove() {
  emit('remove', props.item.idx)
}

function complete() {
  emit('complete', props.item.idx)
}

</script>

<template>
    <tr :class="{'td-odd':true}">
        <td>
            {{item.idx}}
        </td> 
        <td>
            {{item.title}}
        </td> 
        <td>
            {{item.user}}
        </td>
        <td>
            {{item.user}}
        </td> 
        <td>
            {{item.timestamp}}
        </td> 
        <td>
            <button @click="emit('remove', item.idx)">❌</button>
            <button v-if="!item.done" @click="emit('complete', item.idx)">✅ Completa</button>
        </td>
    </tr>
</template>

<style scoped>
    .td-odd {
        filter: blur(0px);
    }
    td {
        border: 1px dashed gray;
    }
</style>