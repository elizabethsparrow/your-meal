import axios, { type AxiosResponse } from 'axios'

export const useAxios = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

useAxios.interceptors.response.use((response: AxiosResponse) => {
  return response.data
})
