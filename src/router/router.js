import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
const router = createRouter({
  history: createWebHashHistory('/doit/'),

  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage,
    },
    {
      path: '/play',
      name: 'Play',
      component: () => import('@/views/PlayPage.vue'),
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/NewsPage.vue'),
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('@/views/GamesPage.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('@/views/ShopPage.vue'),
    },
    {
      path: '/sponsorship',
      name: 'Sponsorship',
      component: () => import('../views/SponsorshipPage.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404Page.vue'),
    },
  ],
});
export default router;
