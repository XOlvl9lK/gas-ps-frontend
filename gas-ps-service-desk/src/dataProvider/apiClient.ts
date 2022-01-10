import axios from 'axios'

export interface ApiResponse<T> {
  data: T,
  total: number
}

export const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api'
})