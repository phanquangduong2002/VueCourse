import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task_store', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'learn english', isFav: true }
    ]
  })
})
