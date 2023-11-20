<template>
  <div class="flex flex-col px-20 my-6 items-start justify-start gap-4">
    <AddTodo @add-todo="addTodo" />
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
import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'

import { computed } from 'vue'
import { useTodosStore } from '../store/modules/todosStore'

export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  setup() {
    const todosStore = useTodosStore()
    const todos = computed(() => todosStore.todos)

    const markItemCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }

    const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const addTodo = title => {
      const id = todos.value.length + 1
      const newTodo = {
        id,
        title,
        completed: false
      }

      todos.value.push(newTodo)
    }

    return {
      todos,
      markItemCompleted,
      deleteTodo,
      addTodo
    }
  }
}
</script>

<style></style>
