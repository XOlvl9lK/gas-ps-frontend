import {
  CreateParams, DeleteManyParams, DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams, UpdateManyParams, UpdateParams
} from 'react-admin'
import { apiClient } from './apiClient'
import { stringify } from 'query-string'
import { DataProvider } from 'react-admin';

export const dataProvider: DataProvider = {
  getList: (resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    }

    return apiClient.get(`/${resource}?${(stringify(query))}`).then(response => ({
        data: response.data.result,
        total: Number(response.data.total)
      }))
  },

  getOne: (resource: string, params: GetOneParams) => {
    console.log('one')
    return apiClient.get(`/${resource}/${params.id}`).then(response => ({
      data: response.data
    }))
  },

  getMany: (resource: string, params: GetManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }
    return apiClient.get(`/${resource}?${stringify(query)}`).then(response => ({
      data: response.data.data
    }))
  },

  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    }

    return apiClient.get(`/${resource}?${stringify(query)}`).then(response => ({
      data: response.data.data,
      total: Number(response.data.total)
    }))
  },

  update: (resource: string, params: UpdateParams) => {
    return apiClient.put(`/${resource}/${params.id}`, {
      ...params.data
    }).then(response => ({ data: response.data }))
  },

  updateMany: (resource: string, params: UpdateManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }

    return apiClient.put(`/${resource}?${stringify(query)}`, {
      ...params.data
    }).then(response => ({ data: response.data }))
  },

  create: (resource: string, params: CreateParams) => {
    return apiClient.post(`/${resource}`, {
      ...params.data
    }).then(response => ({ data: response.data }))
  },

  delete: (resource: string, params: DeleteParams) => {
    return apiClient.delete(`/${resource}/${params.id}`).then(response => ({
      data: response.data
    }))
  },

  deleteMany: (resource: string, params: DeleteManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    }

    return apiClient.delete(`/${resource}?${stringify(query)}`).then(response => ({
      data: response.data
    }))
  }
}