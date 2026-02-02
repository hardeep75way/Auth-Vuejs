import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export function authGuard(
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const auth = useAuthStore()
//   if (to.meta.requiresAuth && !auth.isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }

next()
}