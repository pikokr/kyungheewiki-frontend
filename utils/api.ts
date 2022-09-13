import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  if (localStorage.auth) {
    try {
      const auth = JSON.parse(localStorage.auth)

      let token = auth.accessToken

      if (auth.refreshToken < Date.now() - 10000) {
        // TODO: refresh
      }

      if (!config.headers) config.headers = {}

      config.headers.Authorization = `Bearer ${token}`
    } catch (e) {
      console.warn('Failed to deserialize auth info')
    }
  }

  return config
}, Promise.reject)

export { api }

export enum ErrorCode {
  Unauthorized,
  InternalServerError,
  ValidationError,
}
