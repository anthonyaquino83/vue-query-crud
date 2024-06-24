import { createMemoryHistory, createRouter } from "vue-router";

import Posts from "./components/Posts.vue";
import CreatePost from "./components/CreatePost.vue";

const routes = [
  { path: "/", component: Posts },
  { path: "/createPost", component: CreatePost },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
