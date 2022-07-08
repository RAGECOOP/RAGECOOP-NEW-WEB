import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: homeView
  },
  {
    path: '/downloads',
    name: "Downloads",
    component: () => import('@/views/Downloads.vue')
  },
  {
    path: '/servers',
    name: "Servers",
    component: () => import('@/views/Servers.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: "Not found",
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({ scrollBehavior(to, from, savedPosition) {
  return { top: 0 }
}, history: createWebHistory(import.meta.env.BASE_URL), routes })
router.afterEach((to, from) => document.title = 'RAGECOOP - ' + to.name || 'RAGECOOP')

export default router