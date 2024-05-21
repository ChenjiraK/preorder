import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default",
    component: () =>
      import("../views/PreOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory('/preorder'),
  routes,
});

export default router;
