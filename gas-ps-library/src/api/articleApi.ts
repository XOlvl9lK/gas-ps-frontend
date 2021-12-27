import { apiClient } from './apiClient'
import { Article } from '../components/article/store/slice'

export class ArticleApi {

  static async getAll() {
    return (await apiClient.get<Article[]>('/article')).data
  }

  static async getById(id: number) {
    return (await apiClient.get<Article>(`/article/${id}`)).data
  }

  static async create({ content, chapterId, title }: Omit<Article, 'id'>) {
    return (await apiClient.post<Article>('/article', {
      title,
      content,
      chapterId
    })).data
  }

  static async update({ id, title, content, chapterId }: Article) {
    return (await apiClient.put<Article>('/article', {
      id,
      title,
      content,
      chapterId
    }))
  }

  static async delete(id: number) {
    return (await apiClient.delete(`/article/${id}`)).data
  }
}