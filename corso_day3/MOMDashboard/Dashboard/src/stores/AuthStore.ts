import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Login } from 'momframeworkcorso3'

export const useAuthStore = defineStore('auth', () => {

  const accessToken = ref();
  const refreshToken = ref();
  const username = ref();

  function login(user_name: string, password: string) {
    username.value = user_name

    Login(user_name, password).then((result) => {
      accessToken.value = result.data.accessToken;
      refreshToken.value = result.data.refreshToken;
    }).catch(() => {
      console.log("Login failed for user", user_name, "and pass", "🙄")
    }).finally(() => {
      console.log("Login method is over, see ya")
    })
  }

  return { accessToken, refreshToken, username, login }
})
