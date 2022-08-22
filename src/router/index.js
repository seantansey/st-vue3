import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { trackPageView } from "../utils/googleAnalytics";
import HomeView from "../views/HomeView.vue";

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

export const metaTitle = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return `${capitalized} | seantansey.com`;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/blog/feed",
      name: "blog",
      component: () => import("../views/BlogFeedView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog-post",
      component: () => import("../views/BlogPostView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.afterEach((to) => {
  if (to.name !== "blog-post") trackPageView(to.name, to.path || to.fullPath);

  nextTick(() => {
    document.title = metaTitle(to.name);
  });
});

export default router;
