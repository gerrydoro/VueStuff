import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/AuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
        permissions: ['user', 'admin']
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.meta.requiresAuth;
  const allowedRoles = to.meta.permissions;

  if (requiresAuth && !authStore.isAuthenticated) {
    return next({ name: 'Login' });
  }

  if (allowedRoles && !allowedRoles.includes(authStore.userRole)) {
    return next({ name: 'Unauthorized' }); // 👈 create a 403 page
  }

  next();
});

export default router
