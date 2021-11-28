import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { RestaurauntDTO } from '../../../model/Restauraunt.dto'

export interface ReservePutData {
  customerName: string
  date: string
  timeStart: string
  timeEnd: string
}


class _ApiPutReserve {
  async put(id: string, data: ReservePutData) {
    const config: AxiosRequestConfig = {}
    return await callApi().put<RestaurauntDTO>(`/restauraunt/${id}`, data, config)
  }
}

export const ApiPutReserve = new _ApiPutReserve()
