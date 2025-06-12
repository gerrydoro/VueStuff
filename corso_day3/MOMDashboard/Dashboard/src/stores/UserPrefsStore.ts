import { ref } from 'vue'
import { defineStore } from 'pinia'



export const useUserPrefsStore = defineStore('userPrefs', () => {
  const clock = ref(0);
  const machineId = ref(localStorage.getItem('machineId'))
  const lang = ref(localStorage.getItem('lang'))

  function setPrefs(machineId: string, lang: string) {
    localStorage.setItem('machineId', machineId);
    localStorage.setItem('lang', lang);
  }

  return { machineId, lang, setPrefs, clock }
})
