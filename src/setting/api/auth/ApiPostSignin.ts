import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { JsonWebTokenDTO } from '../../../model/JsonWebToken.dto'

export interface SigninPostData {
  username: string
  password: string
}

class _ApiPostSignin {
  async post(data: SigninPostData) {
    const config: AxiosRequestConfig = {}
    return await callApi().post<JsonWebTokenDTO>('/signin', data, config)
  }
}

export const ApiPostSignin = new _ApiPostSignin()
