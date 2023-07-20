import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/introduce",
      name: "Introduce",
      component: () => import("../views/Introduce.vue"),
    },
  ],
});

export default router;
