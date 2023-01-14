import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/course/:id",
      name: "course",
      component: () => import("../views/CoursePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/news/:id",
      name: "news-detail",
      component: () => import("../views/NewsDetailsView.vue"),
    },
    {
      path: "/coordination",
      name: "coordination",
      component: () => import("../views/CoordinationView.vue"),
    },
  ],
});

export default router;
