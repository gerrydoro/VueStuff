import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Login } from 'momframeworkcorso3'

export const useAuthStore = defineStore('auth', () => {

  const accessToken = ref();
  const refreshToken = ref();

  function login(username: string, password: string) {
    Login(username, password).then((result) => {
      accessToken.value = result.data.accessToken;
      refreshToken.value = result.data.refreshToken;
    }).catch(() => {
      console.log("Login failed for user", username, "and pass", "🙄")
    }).finally(() => {
      console.log("Login method is over, see ya")
    })
  }

  return { accessToken, refreshToken, login }
})
