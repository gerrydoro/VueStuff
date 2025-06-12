<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAuthStore } from '../stores/AuthStore';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const userName = ref('');
const passWord = ref('');

const route = useRoute();


function login(username: string, password: string) {
  const authStore = useAuthStore();
  authStore.login(username, password);
  if (authStore.isAuthenticated) {
    // Redirect or perform any action after successful login
    console.log('Login successful');
    window.location.href = route.query.redirect ? String(route.query.redirect) : '/';
  } else {
    console.error('Login failed');
  }
}
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login(userName, passWord)">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="userName" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="passWord" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
