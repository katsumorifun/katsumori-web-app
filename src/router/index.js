import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Главная', description: "Аниме, манга, ранобэ, визуальные новеллы"}
    },
    {
      path: '/anime',
      name: 'animes',
      component: () => import('../views/AnimesView.vue'),
      meta: {title: 'Аниме', description: "Аниме"}
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: () => import('../views/AnimesView.vue'),
      props: true,
      meta: {title: 'Аниме', description: "Аниме"}
    },
  ]
})

export default router
