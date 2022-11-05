import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anime',
      name: 'animes',
      component: () => import('../views/AnimesView.vue')
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/AnimesView.vue'),
      props: true
    },
  ]
})

export default router
