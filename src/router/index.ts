import {RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import {DefaultLayout} from '@/layouts'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'Home',
        path: '/home',
        component: () => import('../views/Home.vue'),
        meta: {layout: DefaultLayout}
    },
    {
        name: 'Redirect',
        path: '/',
        redirect: '/home',
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFound.vue'),
        meta: {layout: DefaultLayout}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
