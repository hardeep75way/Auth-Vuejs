import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guard'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/RegisterView.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/DashboardView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
  ]
})

router.beforeEach(authGuard)