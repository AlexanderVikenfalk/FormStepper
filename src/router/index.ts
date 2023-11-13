import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// TODO: Fix broken routing system

const routes: Array<RouteRecordRaw> = [
  {
    path: '/wizard',
    component: () => import('../views/stepper/FormStepper.vue'),
    children: [
      {
        path: '/welcome',
        name: 'StepWelcome',
        component: () => import('../views/stepper/StepWelcome.vue'),
      },
      {
        path: '/personal-data',
        name: 'StepPersonalData',
        component: () => import('../views/stepper/StepPersonalData.vue'),
      },
      {
        path: '/terms',
        name: 'StepUserAgreement',
        component: () => import('../views/stepper/StepUserAgreement.vue'),
      },
      {
        path: '/result',
        name: 'StepResult',
        component: () => import('../views/stepper/StepResult.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'Redirect',
    redirect: '/wizard',
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
