import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/information",
      name: "information",
      component: () => import("../views/Information.vue"),
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/bookIng.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
