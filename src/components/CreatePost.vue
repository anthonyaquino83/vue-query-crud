<script setup lang="ts">
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { Post } from "../types";
import { useRouter } from "vue-router";

const router = useRouter();

const queryClient = useQueryClient();

const create = async (newPost: Post): Promise<Post> =>
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  }).then((response) => response.json());

const { isPending, isError, error, isSuccess, mutate } = useMutation({
  mutationFn: create,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  },
});

function onButtonClick() {
  mutate({
    userId: 123,
    id: 456,
    title: "created post",
    body: "body",
  });
  if (isSuccess) {
    router.back();
  }
}
</script>

<template>
  <h1>Create Post</h1>
  <button @click="onButtonClick">Add Todo</button>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
</template>

<style scoped></style>
