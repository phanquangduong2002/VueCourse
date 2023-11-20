import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos_list', {
  state: () => ({
    todos: [
      {
        id: 1,
        title: 'Learn VueJS',
        completed: false
      },
      {
        id: 2,
        title: 'Learn PHP',
        completed: false
      },
      {
        id: 3,
        title: 'Learn NextJS',
        completed: false
      },
      {
        id: 4,
        title: 'Learn Laravel',
        completed: false
      }
    ]
  })
})
