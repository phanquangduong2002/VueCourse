<template>
  <div
    class="py-3 px-5 bg-white mt-4 rounded shadow-md flex items-center justify-between"
  >
    <h3 class="text-[#333] text-lg font-semibold">{{ task.title }}</h3>
    <div class="flex items-center justify-center gap-3">
      <i class="material-icons text-[#bbb] hover:text-[#555] cursor-pointer"
        >delete</i
      >
      <i class="material-icons text-[#bbb] hover:text-[#555] cursor-pointer"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskDetails',
  props: ['task']
}
</script>

<style></style>
