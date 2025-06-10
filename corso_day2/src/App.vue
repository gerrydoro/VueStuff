<script setup lang="ts">
import { ref, reactive } from 'vue'
import TaskContainer from './components/TaskContainer.vue'
import Skeleton from './components/skeleton.vue'

const pageIdx = ref<number>(0);

function changePage(idx: number) {
  pageIdx.value = idx;
}

</script>

<template>
  <div class="py-5 text-center container">
    <h1 class="koerber">
      #strongertogether
    </h1>
  </div>
  <Skeleton>
    <template #menu>
      <router-link to="/" @click="changePage(0)" :class="{ 'btn btn-success': pageIdx === 0 }">
        List {{ pageIdx }}
      </router-link>
      <router-link to="/about" @click="changePage(1)" :class="{ 'btn btn-success': pageIdx === 1 }">
        About {{ pageIdx }}
      </router-link>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </Skeleton>
  <strong>Current route path:</strong> {{ $route.fullPath }}
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
