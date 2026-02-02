import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authApi } from '@/api/auth.api'
import { tokenService } from '@/utils/token'
import type { User, LoginPayload } from '@/types/auth.types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  async function login(payload: LoginPayload) {
    const { data } = await authApi.login(payload)
    tokenService.setTokens(data.accessToken, data.refreshToken)
    user.value = data.user
  }

  function logout() {
    tokenService.clear()
    user.value = null
  }
  async function restoreSession() {
  const refreshToken = tokenService.getRefreshToken()
  if (!refreshToken) return

  try {
    const { data } = await authApi.refresh(refreshToken)
    tokenService.setTokens(data.accessToken, data.refreshToken)
    user.value = data.user
  } catch {
    logout()
  }
}

  return {
    user,
    isAuthenticated,
    login,
    logout,
    restoreSession
  }


})