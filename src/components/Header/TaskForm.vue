<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center justify-center gap-4 min-w-[25%]"
  >
    <input
      type="text"
      placeholder="I need to..."
      v-model="newTask"
      class="flex-1 bg-white px-4 py-1 text-sm font-light text-[#555] outline-none rounded-2xl"
    />
    <button
      class="bg-white border-[2px] border-[#555] rounded-2xl px-4 py-1 text-sm"
    >
      Add
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/TaskStore'

export default {
  name: 'TaskForm',
  setup() {
    const taskStore = useTaskStore()
    const newTask = ref('')

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        const id = taskStore.tasks[taskStore.tasks.length - 1].id + 1
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: id
        })

        newTask.value = ''
      }
    }

    return {
      taskStore,
      newTask,
      handleSubmit
    }
  }
}
</script>

<style></style>
