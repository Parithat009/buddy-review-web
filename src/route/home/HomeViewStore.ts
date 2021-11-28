import { makeAutoObservable } from 'mobx'
import { AxiosError } from 'axios'
import { ApiGetRestauraunt } from '../../setting/api'
import { RestaurauntDTO } from '../../model/Restauraunt.dto'

class HomeViewStore {
  restaurauntLoadable: RestaurauntDTO[] = []
  restaurauntSearch: RestaurauntDTO[] = []
  responseError: AxiosError
  search: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSearch(value: string) {
    this.search = value
  }

  setRestaurauntSearch(value) {
    this.restaurauntSearch = value
  }

  async onRetrieveRestauraunt() {
    try {
      const response = await ApiGetRestauraunt.get()

      if (response?.status !== 200) return
      this.restaurauntLoadable = response?.data
      this.restaurauntSearch = response?.data

    } catch (error) {
      this.responseError = error as AxiosError
    }
  }
}

export const useHomeStore: HomeViewStore = new HomeViewStore()
