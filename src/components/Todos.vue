<template>
  <div class="flex flex-col px-20 my-6 items-start justify-start gap-4">
    <TodoItem
      v-for="todo in todos"
      :key="todo"
      :todoProps="todo"
      @item-completed="markItemCompleted"
      @delete-item="deleteTodo"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'Todos',
  components: { TodoItem },
  setup() {
    const todos = ref([
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
    ])

    const markItemCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }

    const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    return {
      todos,
      markItemCompleted,
      deleteTodo
    }
  }
}
</script>

<style></style>
