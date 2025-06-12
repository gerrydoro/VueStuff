<script setup lang="ts">
import { ref } from 'vue';
import Skeleton from './components/Skeleton.vue'
import { useAuthStore } from './stores/AuthStore';
// import type { useRoute } from 'vue-router';


const machineIds = ref(['1', '2', '3']);

// const = useRoute();

</script>

<template>
  <Skeleton>
    <template #nav>
      <li v-for="machineId in machineIds" :key="machineId" class="nav-item">
        <RouterLink class="nav-link" :class="{
          'active':machineId == $route.params.machineId,
          'disabled':machineId !== $route.params.machineId
          }" aria-current="page"
          :to="{ name: 'home', params: { machineId } }">
          Machine {{ machineId }}
        </RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink class="nav-link active" aria-current="page" to="/about">About</RouterLink>
      </li>

      <li class="nav-item">
        <button @click="useAuthStore().login('admin', 'password')">Login</button>
      </li>
    </template>
    <template #body>
      <RouterView></RouterView>
    </template>
  </Skeleton>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
