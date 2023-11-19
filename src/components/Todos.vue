<template>
  <div class="flex flex-col px-8 my-6 items-start justify-start gap-2">
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
      'Learn VueJS',
      'Learn PHP',
      'Learn MySQL',
      'Learn English'
    ])

    return {
      todos: todos
    }
  }
}
</script>

<style></style>
