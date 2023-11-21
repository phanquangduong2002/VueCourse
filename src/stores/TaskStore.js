import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task_store', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'learn english', isFav: true }
    ],
    filter: 'all'
  }),
  getters: {
    favs() {
      return this.tasks.filter(task => task.isFav)
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount() {
      return this.tasks.length
    }
  },
  actions: {
    changeFilter(filterType) {
      this.filter = filterType
    },
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFav = !task.isFav
    }
  }
})
