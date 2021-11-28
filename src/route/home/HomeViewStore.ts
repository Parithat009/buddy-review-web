import { makeAutoObservable } from 'mobx'
import { AxiosError } from 'axios'
import { ApiGetRestauraunt } from '../../setting/api'
import { RestaurauntDTO } from '../../model/Restauraunt.dto'

class HomeViewStore {
  restaurauntLoadable: RestaurauntDTO[] = []
  responseError: AxiosError

  constructor() {
    makeAutoObservable(this)
  }

  async onRetrieveRestauraunt() {
    try {
      const response = await ApiGetRestauraunt.get()
      
      if (response?.status !== 200) return
      this.restaurauntLoadable = response?.data

    } catch (error) {
      this.responseError = error as AxiosError
    }
  }
}

export const useHomeStore: HomeViewStore = new HomeViewStore()
