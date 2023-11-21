import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task_store', {
  state: () => ({
    tasks: [],
    filter: 'all',
    isLoading: false
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
    async getTasks() {
      try {
        this.isLoading = true
        const res = await fetch('../../data/db.json')
        const data = await res.json()
        this.tasks = data.tasks
        this.isLoading = false
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    changeFilter(filterType) {
      this.filter = filterType
    },
    async addTask(task) {
      this.tasks.push(task)
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    async toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFav = !task.isFav
    }
  }
})
