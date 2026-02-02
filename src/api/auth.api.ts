import { api } from './axios'
import type { LoginPayload, AuthResponse } from '@/types/auth.types'

export const authApi = {
  login(payload: LoginPayload) {
    return api.post<AuthResponse>('/auth/login', payload)
  },

  register(payload: LoginPayload) {
    return api.post<AuthResponse>('/auth/register', payload)
  },

  refresh(refreshToken: string) {
    return api.post<AuthResponse>('/auth/refresh', { refreshToken })
  },

  logout() {
    return api.post('/auth/logout')
  }
}