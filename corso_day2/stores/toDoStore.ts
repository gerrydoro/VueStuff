import { defineStore } from 'pinia'

export interface Task {
  id: number
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [] as Task[]
  }),
  getters: {
    activeCount: (state) => state.tasks.filter(t => !t.done).length
  },
  actions: {
    addTask(text: string) {
      this.tasks.push({ id: Date.now(), text, done: false })
    },
    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    }
  }
})