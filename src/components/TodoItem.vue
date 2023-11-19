<template>
  <div class="w-full flex items-center" :id="todoProps.id">
    <input
      type="checkbox"
      class="mr-3"
      :checked="todoProps.completed"
      @change="markItemCompleted"
    />
    <p :class="todoProps.completed ? 'line-through' : ''">
      {{ todoProps.title }}
    </p>
    <button
      @click="deleteItem"
      class="bg-red-500 text-white border-none px-2 py-1 cursor rounded-md ml-auto"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup(props, context) {
    const markItemCompleted = () => {
      context.emit('item-completed', props.todoProps.id)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.todoProps.id)
    }

    return {
      markItemCompleted,
      deleteItem
    }
  }
}
</script>

<style></style>
