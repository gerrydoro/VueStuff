<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{
    item,
    showDone: Bool
}>()

</script>
<template>
    <tr v-show="(item.done && props.showDone) || (!props.showDone && !item.done)">
        <td :class="{ 'st': item.done }">{{ item.index }}</td>
        <td :class="{ 'st': item.done }">{{ item.title }}</td>
        <td :class="{ 'st': item.done }">{{ item.user }}</td>
        <td :class="{ 'st': item.done }">{{ item.assignee }}</td>
        <td :class="{ 'st': item.done }">{{ item.timestamp }}</td>
        <td :class="{ 'st': item.done }"><input type="checkbox" v-model="item.done" /></td>
    </tr>
</template>


<style scoped>
.td-odd {
    filter: blur(0px)
}

.st {
    background-color: red;
}
</style>
