import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/doit/'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/views/mainPage.vue'),
    },
    {
      path: '/play',
      name: 'Play',
      component: () => import('@/views/playPage.vue'),
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/newsPage.vue'),
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('@/views/gamesPage.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('@/views/shopPage.vue'),
    },
    {
      path: '/sponsorship',
      name: 'Sponsorship',
      component: () => import('../views/sponsorshipPage.vue'),
    },
  ],
});
export default router;
