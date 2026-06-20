import axiosClient from '../axiosClient'

/**
 * Vi du mau cho mot module API. Moi resource (user, product, order...)
 * nen co mot file rieng trong src/services/api.
 */
const userApi = {
  getAll: (params) => axiosClient.get('/users', { params }),
  getById: (id) => axiosClient.get(`/users/${id}`),
  create: (payload) => axiosClient.post('/users', payload),
  update: (id, payload) => axiosClient.put(`/users/${id}`, payload),
  remove: (id) => axiosClient.delete(`/users/${id}`),
}

export default userApi
