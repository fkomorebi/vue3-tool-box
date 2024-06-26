import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect(to) {
        return {
          name: 'WelcomePage',
          query: to.query,
        };
      },
    }, {
      path: '/slide_in',
      name: 'SlideIn',
      component: () => import('@/views/SlideIn.vue'),
    },
  ],
})

export default router;
