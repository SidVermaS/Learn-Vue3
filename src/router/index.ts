import AboutPage from '@/pages/AboutPage.vue'
import CompositionPage from '@/pages/CompositionPage.vue';
import HomePage from '@/pages/HomePage.vue'
import PiniaPage from '@/pages/PiniaPage.vue'
import { createRouter, createWebHistory,  } from 'vue-router';

export const routes= [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/composition',
    name: 'composition',
    component: CompositionPage,
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: PiniaPage,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
