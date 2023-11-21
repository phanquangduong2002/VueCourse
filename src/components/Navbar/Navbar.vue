<template>
  <nav class="max-w-[50%] my-5 mx-auto flex items-center justify-end">
    <div class="flex items-center justify-end gap-4">
      <button
        @click="handleChangeFilter('all')"
        class="bg-white border-[2px] border-[#555] rounded-2xl px-2 py-1 text-sm"
      >
        All task
      </button>
      <button
        @click="handleChangeFilter('favs')"
        class="bg-white border-[2px] border-[#555] rounded-2xl px-2 py-1 text-sm"
      >
        Favorite task
      </button>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/TaskStore'
export default {
  name: 'Navbar',
  setup() {
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleChangeFilter = filterType => {
      taskStore.changeFilter(filterType)
    }

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: taskStore.tasks.length + 1
        })

        newTask.value = ''
      }
    }

    return {
      taskStore,
      newTask,
      handleChangeFilter,
      handleSubmit
    }
  }
}
</script>

<style></style>
