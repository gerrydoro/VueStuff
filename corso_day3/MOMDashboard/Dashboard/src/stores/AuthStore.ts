import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Login } from 'momframeworkcorso3'
import router from '@/router'


export const useAuthStore = defineStore('auth', () => {

  const accessToken = ref(localStorage.getItem('accessToken'))
  const refreshToken = ref(localStorage.getItem('refreshToken'));
  const username = ref(localStorage.getItem('username'));

  const isAuthenticated = computed(() => {
    return accessToken.value !== null && accessToken.value !== undefined;
  });

  function login(user_name: string, password: string) {
    username.value = user_name
    localStorage.setItem('username', username.value);

    Login(user_name, password).then((result) => {
      accessToken.value = result.data.accessToken;
      refreshToken.value = result.data.refreshToken;

      localStorage.setItem('accessToken', accessToken.value);
      localStorage.setItem('refreshToken', refreshToken.value);

    }).catch(() => {
      console.log("Login failed for user", user_name, "and pass", "🙄")
    }).finally(() => {
      console.log("Login method is over, see ya")
    })
  }

  return { accessToken, refreshToken, username, login, isAuthenticated }
})
