<template>
  <p>
    <input type="checkbox" />
    {{ todoProps }}
    <button>Delete</button>
  </p>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoProps']
}
</script>

<style></style>
