import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { RestaurauntDTO } from '../../../model/Restauraunt.dto'

export interface RestaurauntGetParams { }

class _ApiGetRestauraunt {
  async get() {
    const config: AxiosRequestConfig = {}
    return await callApi().get<RestaurauntDTO[]>('/restauraunt', config)
  }
}

export const ApiGetRestauraunt = new _ApiGetRestauraunt()
