<template>
  <div class="max-w-[40%] my-5 mx-auto">
    <div v-for="task in tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useTaskStore } from '../../stores/TaskStore'

import TaskDetails from './TaskDetails.vue'
export default {
  name: 'Tasks',
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    const tasks = computed(() => taskStore.tasks)

    return { tasks }
  }
}
</script>

<style></style>
