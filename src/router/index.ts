import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import WizardLayout from "@/layouts/WizardLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/home",
    component: () => import("../views/Stepper.vue"),
    meta: { layout: WizardLayout },
  },
  {
    name: "Stepper",
    path: "/stepper",
    component: () => import("../views/Stepper.vue"),
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
