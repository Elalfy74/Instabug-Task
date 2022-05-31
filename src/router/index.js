import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: WelcomeView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      auth: false,
      title: "Login | Instabug",
    },
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "NotFound",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/not-found",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !localStorage.getItem("isLoggedIn")) {
    next("/login");
  } else if (!to.meta.auth && localStorage.getItem("isLoggedIn")) {
    next("/welcome");
  } else {
    next();
  }
});

router.afterEach((to) => (document.title = to.meta.title || "Instabug"));

export default router;
