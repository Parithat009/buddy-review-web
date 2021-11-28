
import axios from 'axios'
import conf from './baseApi'
import { AppLocalStorage } from '../../util/AppLocalStorage'

export const callApi = () => {
  const authorize = AppLocalStorage.get('authorize')
  return axios.create({
    baseURL: `${conf.baseURL}/api`,
    headers: {
      Authorization: `Bearer ${authorize}`
    }
  })
}
