import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/preorder",
    name: "preorder",
    component: () =>
      import("../views/PreOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory('/store'),
  routes,
});

export default router;
