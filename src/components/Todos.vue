<template>
  <div class="flex flex-col px-20 my-6 items-start justify-start gap-4">
    <TodoItem v-for="todo in todos" v-bind:key="todo" v-bind:todoProps="todo" />
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

    return {
      todos: todos
    }
  }
}
</script>

<style></style>
