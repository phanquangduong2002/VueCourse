<template>
  <div>
    <div class="max-w-[40%] my-5 mx-auto" v-if="filter === 'all'">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="max-w-[40%] my-5 mx-auto" v-if="filter === 'favs'">
      <p>Favorite tasks</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/TaskStore'

import TaskDetails from './TaskDetails.vue'
export default {
  name: 'Tasks',
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')
    return {
      taskStore,
      filter
    }
  }
}
</script>

<style></style>
