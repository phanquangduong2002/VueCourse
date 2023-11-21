<template>
  <div>
    <div class="max-w-[50%] my-5 mx-auto" v-if="taskStore.filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="max-w-[50%] my-5 mx-auto" v-if="taskStore.filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favorite tasks left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../../stores/TaskStore'

import TaskDetails from './TaskDetails.vue'
export default {
  name: 'Tasks',
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    return {
      taskStore
    }
  }
}
</script>

<style></style>
