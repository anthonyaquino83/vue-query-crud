<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Post } from "../types";

const fetcher = async (): Promise<Post[]> =>
  await fetch("http://localhost:3000/posts").then((response) =>
    response.json()
  );

const { isPending, isError, data, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetcher,
});
</script>

<template>
  <h1>Posts</h1>

  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <ul v-else>
    <li v-for="post in data" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<style scoped></style>
