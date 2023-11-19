<template>
  <div class="w-full flex items-center" :id="todoProps.id">
    <input type="checkbox" class="mr-3" :checked="todoProps.completed" />
    <p :class="todoProps.completed ? 'line-through' : ''">
      {{ todoProps.title }}
    </p>
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
