<template>
  <div>
    <p v-for="todo in todos" v-bind:key="todo"></p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Todos',
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
