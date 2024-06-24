<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <nav>
    <RouterLink to="/">Posts</RouterLink>
    <RouterLink to="/createPost">Create</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <VueQueryDevtools />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app > nav > a {
  margin: 8px;
}
</style>
