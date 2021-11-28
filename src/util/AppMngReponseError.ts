import { AxiosError } from 'axios'
import { AppLocalStorage } from './AppLocalStorage'

class _AppMngReponseError {
  verify(errResponse: AxiosError) {
    if (errResponse?.response?.status === 400) {
      // message.error(t('MessageResponseApi.Status400'), 2)
    } else if (errResponse?.response?.status === 401) {
      // message.warning(t('MessageResponseApi.Status401'), 2)
      AppLocalStorage.remove('authorize')
      setTimeout(() => location.replace('/signin'), 2000);
    } else if (errResponse?.response?.status === 403) {
      // message.error(t('MessageResponseApi.Status403'), 2)
    } else if (errResponse?.response?.status === 404) {
      // message.error(t('MessageResponseApi.Status404'), 2)
    } else if (errResponse?.response?.status === 409) {
      // message.error(t('MessageResponseApi.Status409'), 2)
    } else if (errResponse?.response?.status === 500) {
      // message.error(t('MessageResponseApi.Status500'), 2)
    } else {
      // message.error(t('MessageResponseApi.SystemError'), 2)
    }
  }
}

export const AppMngReponseError = new _AppMngReponseError()
