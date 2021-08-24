import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/imageGalleryViews.vue'),
    children: [
      {
        path: 'mandi',
        name: 'Mandi',
        component: () => import('../views/imageGallery.vue'),
        meta: { title: 'mandi' },
      },
      {
        path: 'makrama',
        name: 'Makrama',
        component: () => import('../views/imageGallery.vue'),
        meta: { title: 'makrama' },
      },
      {
        path: 'dresses',
        name: 'Dresses',
        component: () => import('../views/imageGallery.vue'),
        meta: { title: 'dresses' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
