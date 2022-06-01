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
      title: "Welcome | Instabug",
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
    path: "/404",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "User Feedback & Bug reporting",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.meta.auth && !isLoggedIn) {
    next("/login");
  } else if (to.meta.auth === false && isLoggedIn) {
    next("/welcome");
  } else {
    next();
  }
});

router.afterEach((to) => (document.title = to.meta.title || "Instabug"));

export default router;
