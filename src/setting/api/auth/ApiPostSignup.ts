import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { JsonWebTokenDTO } from '../../../model/JsonWebToken.dto'

export interface SignupPostData {
  username: string
  password: string
}

class _ApiPostSignup {
  async post(data: SignupPostData) {
    const config: AxiosRequestConfig = {}
    return await callApi().post<JsonWebTokenDTO>('/signup', data, config)
  }
}

export const ApiPostSignup = new _ApiPostSignup()
