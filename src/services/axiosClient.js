import axios from 'axios'
import { ENV } from '@config/env'
import { STORAGE_KEYS } from '@constants'

const axiosClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Xu ly loi tap trung: log, redirect 401, toast thong bao, ...
    if (ENV.IS_DEV) {
      console.error('[API Error]', error?.response || error.message)
    }
    return Promise.reject(error)
  },
)

export default axiosClient
