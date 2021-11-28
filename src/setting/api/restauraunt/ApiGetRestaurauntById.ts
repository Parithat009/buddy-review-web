import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { RestaurauntDTO } from '../../../model/Restauraunt.dto'

class _ApiGetRestaurauntById {
  async get(id: string) {
    const config: AxiosRequestConfig = {}
    return await callApi().get<RestaurauntDTO>(`/restauraunt/${id}`, config)
  }
}

export const ApiGetRestaurauntById = new _ApiGetRestaurauntById()
