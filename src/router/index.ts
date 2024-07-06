import TodoList from "@/components/TodoList.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "TodoList", component: TodoList },
  {
    path: "/add",
    name: "TodoForm",
    component: () => import("@/components/TodoForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
