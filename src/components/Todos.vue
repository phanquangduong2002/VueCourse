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
import { ref } from 'vue'
import axios from 'axios'

import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'

export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  setup() {
    const todos = ref([])

    const getAllTodos = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )

        todos.value = res.data
      } catch (error) {
        console.log(error)
      }
    }

    getAllTodos()

    const markItemCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }

    const deleteTodo = async id => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        todos.value = todos.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    }

    const addTodo = async title => {
      try {
        const res = await axios.post(
          `https://jsonplaceholder.typicode.com/todos`,
          {
            title,
            completed: false
          }
        )
        todos.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
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
