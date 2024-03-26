import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/doit/'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/views/MainPage.vue'),
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
  ],
});
export default router;
