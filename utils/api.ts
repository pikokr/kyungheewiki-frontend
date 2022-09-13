import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async (config) => {
  if (localStorage.auth) {
    try {
      let auth = JSON.parse(localStorage.auth)

      if (auth.refreshToken < Date.now() - 10000) {
        const { data } = await axios.post('/auth/refresh', auth, {
          baseURL: process.env.NEXT_PUBLIC_API_URL,
        })

        auth = data

        localStorage.auth = JSON.stringify(data)
      }

      const token = auth.accessToken

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
  NotFound,
}
