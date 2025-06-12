import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'
import Login from '../components/Login.vue'
import MachineView from '@/views/MachineView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:machineId',
      name: 'home',
      component: MachineView,
      meta: {
        requiresAuth: true,
        permissions: ['user', 'admin']
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
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
      meta: {
        requiresAuth: true,
        permissions: ['user', 'admin']
      },
      children: [
        {

          path: '/about/admin',
          name: 'about-admin',
          component: Login,
          meta: {
            requiresAuth: false,
            permissions: ['admin']

          }
        },
        {

          path: '/about/user',
          name: 'about-user',
          component: Login,
          meta: {
            requiresAuth: false,
            permissions: ['user']

          }
        }
      ]
    },

  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.meta.requiresAuth;


  if (requiresAuth && !authStore.isAuthenticated) {
    return next({ name: 'login', query: { redirect: to.fullPath } });
  }



  next();
});

export default router
