import { apiClient } from './apiClient'
import { Node } from '../components/sideBar/store/slice'

export class NodesApi {

  static async getAll() {
    return (await apiClient.get<Node[]>('/nodes')).data
  }
}