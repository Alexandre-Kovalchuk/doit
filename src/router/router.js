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
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404Page.vue'),
    },
    {
      path: '/premium',
      name: 'Premium',
      component: () => import('../views/PremiumPage.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfilePage.vue'),
    },

    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('../views/PrivacyPage.vue'),
    },

    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutPage.vue'),
    },

    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactPage.vue'),
    },

    {
      path: '/tournament/:name',
      name: 'Tournament',
      component: () => import('../views/TournamentPage.vue'),
    },
    {
      path: '/tournament/:name/:id',
      name: 'Tournament Name',
      component: () => import('../views/TournamentNamePage.vue'),
    },

    {
      path: '/cooming',
      name: 'Coomming',
      component: () => import('../views/CoomingSoonPage.vue'),
    },
  ],
});

export default router;
