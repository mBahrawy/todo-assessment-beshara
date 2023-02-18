import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

// Request interceptor
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const configClone = { ...config }
    return configClone
  },
  (error: Error) => {
    Promise.reject(error)
  }
)

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    let errorMsg = `Error Code: ${error.response?.status},  Message: ${error.response?.data}`
    console.log(errorMsg)
    return Promise.reject(error)
  }
)

export default http
