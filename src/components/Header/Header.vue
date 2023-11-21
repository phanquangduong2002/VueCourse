<template>
  <header
    class="text-center bg-[#e7e7e7] py-5 flex flex-col items-center justify-center gap-6"
  >
    <div class="flex items-center justify-center gap-2">
      <img
        src="../../assets/icons/logo.svg"
        alt="Logo"
        class="w-20 h-20 rotate-[-8deg]"
      />
      <h1 class="text-3xl text-[#555] rotate-[1deg] font-extrabold">
        Todo Task
      </h1>
    </div>
    <TaskForm />
  </header>
</template>

<script>
import TaskForm from './TaskForm.vue'

export default {
  name: 'Header',
  components: { TaskForm }
}
</script>

<style></style>
