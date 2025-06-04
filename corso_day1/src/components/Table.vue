<script setup lang="ts">
import { ref, reactive } from 'vue'
import Row from './Row.vue'

const props = defineProps<{
    taskList,
    showDone: Bool
}>()

const taskList = ref(props.taskList)

</script>
<template>
    <h1>{{ props.showDone ? "Done" : "ToDo" }}</h1>
    <table>
        <th>Index</th>
        <th>Title</th>
        <th>User</th>
        <th>Assignee</th>
        <th>Timestamp</th>
        <th>Done</th>
        <tbody>
            <Row :item="item" :showDone="props.showDone" v-for="item in taskList"></Row>
        </tbody>
    </table>
</template>


<style scoped>
th {
    background-color: darkslategrey;
}

tr {
    background-color: gray;
}
</style>
