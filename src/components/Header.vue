<template>
  <header class="bg-[#78c2ad] p-4">
    <div class="flex items-center justify-between px-4">
      <div class="flex items-center justify-start gap-3">
        <img src="../assets/icons/logo.svg" alt="Logo SVG" class="w-10 h-10" />
        <h1 class="text-4xl text-white font-semibold text-center">ToDoList</h1>
      </div>
      <Navbar />
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Header',
  components: { Navbar }
}
</script>

<style scoped></style>
