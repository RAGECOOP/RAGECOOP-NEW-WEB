import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('@/views/Home.vue')
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