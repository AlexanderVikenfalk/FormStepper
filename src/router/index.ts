import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import WizardLayout from "@/layouts/WizardLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/home",
    component: () => import("../views/stepper/FormStepper.vue"),
    meta: { layout: WizardLayout },
  },
  {
    name: "Stepper",
    path: "/:locale/stepper",
    component: () => import("../views/stepper/FormStepper.vue"),
    meta: { layout: WizardLayout },
  },
  {
    name: "Redirect",
    path: "/",
    redirect: "/home",
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
    meta: { layout: DefaultLayout },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
