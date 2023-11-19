<template>
  <div class="w-[40%] flex items-center">
    <input type="checkbox" class="mr-3" />
    {{ todoProps }}
    <button
      class="bg-red-500 text-white border-none px-2 py-1 cursor rounded-md ml-auto"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoProps']
}
</script>

<style></style>
