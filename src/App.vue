<template>
  <div class="bg-[#d4d3d3] min-h-[100vh]">
    <Header />
    <Navbar />
    <Tasks />
    <router-view />
  </div>
</template>

<script>
import { useTaskStore } from './stores/TaskStore'
import Header from './components/Header/Header.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Tasks from './components/Tasks/Tasks.vue'

export default {
  name: 'App',
  components: { Header, Navbar, Tasks },
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}
</script>

<style></style>
