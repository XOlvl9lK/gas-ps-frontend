import { apiClient } from './apiClient'
import { Chapter } from '../components/sideBar/store/slice'

export class ChaptersApi {
  private static path = '/chapter'

  static async getAll() {
    return (await apiClient.get<Chapter[]>('/chapter')).data
  }

  static async create({
    title, parentId
  }: Omit<Chapter, 'id'>) {
    return (await apiClient.post<Chapter>('/chapter', {
      title,
      parentId
    })).data
  }

  static async update({ id, title, parentId }: Chapter) {
    return (await apiClient.put<Chapter>('/chapter', {
      id,
      title,
      parentId
    })).data
  }

  static async delete(id: number) {
    return (await apiClient.delete(`/chapter/${id}`)).data
  }
}