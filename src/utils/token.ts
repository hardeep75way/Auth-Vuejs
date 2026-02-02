const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

export const tokenService = {
  getAccessToken: (): string | null =>
    localStorage.getItem(ACCESS_TOKEN),

  getRefreshToken: (): string | null =>
    localStorage.getItem(REFRESH_TOKEN),

  setTokens(access: string, refresh: string) {
    localStorage.setItem(ACCESS_TOKEN, access)
    localStorage.setItem(REFRESH_TOKEN, refresh)
  },

  clear() {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
  }
}