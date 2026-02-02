import { useAuthStore } from '@/stores/auth.store'

export const useAuth = () => {
  const authStore = useAuthStore()
  return {
    login: authStore.login,
    logout: authStore.logout,
    user: authStore.user,
    isAuthenticated: authStore.isAuthenticated
  }
}