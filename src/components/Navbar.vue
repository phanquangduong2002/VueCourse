<template>
  <nav class="flex-1">
    <ul
      class="flex items-start justify-end gap-8 text-white text-xl font-semibold"
    >
      <li class="cursor-pointer">
        <router-link to="/">Home</router-link>
      </li>
      <li class="cursor-pointer">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li class="cursor-pointer">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style></style>
