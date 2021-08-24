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
        name: 'mandi',
        component: () => import('../views/imageGallery.vue'),
        meta: {
          images: [
            '01.jpeg',
            '02.jpeg',
            '03.jpeg',
            '04.jpeg',
            '05.jpeg',
            '06.jpeg',
            '07.jpeg',
            '08.jpeg',
            '09.jpeg',
          ],
        },
      },
      {
        path: 'makrama',
        name: 'makrama',
        component: () => import('../views/imageGallery.vue'),
        meta: {
          images: [
            '01.jpeg',
            '02.jpeg',
            '03.jpeg',
            '04.jpeg',
            '05.jpeg',
            '06.jpeg',
            '07.jpeg',
            '08.jpeg',
            '09.jpeg',
            '10.jpeg',
          ],
        },
      },
      {
        path: 'dresses',
        name: 'dresses',
        component: () => import('../views/imageGallery.vue'),
        meta: {
          images: [
            '01.jpeg',
            '02.jpeg',
            '03.jpeg',
            '04.jpeg',
            '05.jpeg',
            '06.jpeg',
            '07.jpeg',
            '08.jpeg',
            '09.jpeg',
            '10.jpeg',
            '11.jpeg',
            '12.jpeg',
            '13.jpeg',
            '14.jpeg',
            '15.jpeg',
            '16.jpeg',
            '17.jpeg',
            '18.jpeg',
            '19.jpeg',
            '20.jpeg',
            '21.jpeg',
          ],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
