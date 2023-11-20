<template>
  <div>
    <Header />
    <Tasks />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Tasks from './components/Tasks/Tasks.vue'
export default {
  name: 'App',
  components: { Header, Tasks }
}
</script>

<style></style>
