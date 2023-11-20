<template>
  <form class="flex ml-auto mb-4" @submit="addTodo">
    <input
      type="text"
      v-model="title"
      placeholder="Enter the work to be done..."
      class="flex-1 px-3 py-1 rounded-md text-sm font-light text-[#666] bg-orange-200 focus:outline-orange-300 outline-[1px] outline-none placeholder:text-sm placeholder:font-light"
    />
    <input
      type="submit"
      value="Add"
      class="ml-6 text-white text-sm font-light bg-orange-300 px-5 py-1 rounded-lg cursor-pointer hover:bg-orange-400"
    />
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')

    const addTodo = e => {
      e.preventDefault()
      context.emit('add-todo', title.value)

      title.value = ''
    }

    return {
      title,
      addTodo
    }
  }
}
</script>

<style scoped></style>
