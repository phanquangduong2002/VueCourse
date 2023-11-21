<template>
  <div
    class="py-3 px-5 bg-white mt-4 rounded shadow-lg flex items-center justify-between"
  >
    <h3 class="text-[#333] text-lg font-semibold">{{ task.title }}</h3>
    <div class="flex items-center justify-center gap-3">
      <button @click="taskStore.deleteTask(task.id)">
        <i class="material-icons text-[#bbb] hover:text-[#555] cursor-pointer"
          >delete</i
        >
      </button>
      <button @click="taskStore.toggleFav(task.id)">
        <i
          :class="[
            'material-icons cursor-pointer',
            task.isFav ? 'text-red-500' : 'text-[#bbb] hover:text-[#555]'
          ]"
          >favorite</i
        >
      </button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../../stores/TaskStore'
export default {
  name: 'TaskDetails',
  props: ['task'],
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}
</script>

<style></style>
