import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task_store', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'buy some milk',
        isFav: true
      },
      {
        id: 2,
        title: 'drink soda',
        isFav: false
      },
      {
        id: 3,
        title: 'eat some pinapples',
        isFav: false
      }
    ],
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
  },
  persist: true
})
