import { AxiosError } from 'axios'
import { AppLocalStorage } from './AppLocalStorage'

class _AppMngReponseError {
  verify(errResponse: AxiosError) {
    if (errResponse?.response?.status === 400) {
    } else if (errResponse?.response?.status === 401) {
      AppLocalStorage.remove('authorize')
      setTimeout(() => location.replace('/signin'), 2000);
    }
  }
}

export const AppMngReponseError = new _AppMngReponseError()
