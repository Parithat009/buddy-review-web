import { makeAutoObservable, runInAction } from 'mobx'
import { AxiosError } from 'axios'
import { ApiGetRestaurauntById, ApiPutReserve } from '../../setting/api'
import { AppTypes } from '../../type/AppType'
import { RestaurauntDTO, RestaurauntTranformDTO } from '../../model/Restauraunt.dto'

export interface State {
  customerName: string;
  isCustomerNameInvalid: boolean;
  date: string;
  isDateInvalid: boolean;
  timeStart: string;
  isTimeStartInvalid: boolean;
  timeEnd: string;
  isTimeEndInvalid: boolean;
}

const initialState: State = {
  customerName: '',
  isCustomerNameInvalid: false,
  date: '',
  isDateInvalid: false,
  timeStart: '',
  isTimeStartInvalid: false,
  timeEnd: '',
  isTimeEndInvalid: false
}

class HomeIdViewStore {
  restaurauntLoadable = {} as RestaurauntDTO | RestaurauntTranformDTO
  responseError: AxiosError
  status: AppTypes.Status = 'default'
  state = initialState

  constructor() {
    makeAutoObservable(this)
  }

  setState<Key extends keyof State>(
    name: Key,
    value: State[Key]
  ): void {
    this.state[name] = value
  }

  setStatus(value: AppTypes.Status) {
    this.status = value
  }

  private verify() {
    const isStart = new Date(`${this?.state?.date} ${this?.state?.timeStart}`).getTime()
    const isEnd = new Date(`${this?.state?.date} ${this?.state?.timeEnd}`).getTime()

    const isCustomerNameInValid = !(this.state.customerName && this.state.customerName.trim().length >= 1)
    const isDateInValid = !this.state.date
    const isTimeStartInValid = !(isStart < isEnd)
    const isTimeEndInValid = !(isStart < isEnd)

    let indexKey
    const isOverlapTime = this.restaurauntLoadable?.slot?.map((item, index) => {
      return item?.map((val) => {
        if (val?.date === this?.state?.date) {
          indexKey = index
          if (
            (isStart <= new Date(`${val?.date} ${val?.timeStart}`).getTime()
              && isEnd <= new Date(`${val?.date} ${val?.timeStart}`).getTime())
            || (isStart >= new Date(`${val?.date} ${val?.timeEnd}`).getTime()
              && isEnd >= new Date(`${val?.date} ${val?.timeEnd}`).getTime())
          ) {
            return false
          } else return true
        }
      })
    })
    const isOverlapTimeFinal = isOverlapTime[indexKey]?.includes(true)

    this.setState('isCustomerNameInvalid', isCustomerNameInValid)
    this.setState('isDateInvalid', isDateInValid)
    this.setState('isTimeStartInvalid', isTimeStartInValid || isOverlapTimeFinal)
    this.setState('isTimeEndInvalid', isTimeEndInValid || isOverlapTimeFinal)

    return (
      isCustomerNameInValid
      || isDateInValid
      || isTimeStartInValid
      || isTimeEndInValid
      || isOverlapTimeFinal
    )
  }

  async reserve(id: string) {
    const isInValid = this.verify()
    if (isInValid) return

    try {
      const response = await ApiPutReserve.put(id, {
        customerName: this.state.customerName,
        date: this.state.date,
        timeStart: this.state.timeStart,
        timeEnd: this.state.timeEnd
      })

      if (response?.status !== 200) return
      this.sortData(response)
      runInAction(() => {
        this.state = initialState

      })
    } catch (error) {
      this.status = 'error'
      this.responseError = error as AxiosError
    }
  }

  async onRetrieveRestauraunt(id: string) {
    try {
      const response = await ApiGetRestaurauntById.get(id)

      if (response?.status !== 200) return
      this.sortData(response)
    } catch (error) {
      this.responseError = error as AxiosError
    }
  }

  sortData(response) {
    const slotGroupBy = response?.data?.slot?.reduce((prev, cur) => ({
      ...prev,
      [cur.date]: (prev[cur.date] || []).concat(cur)
    }), {})

    const tranform = Object.keys(slotGroupBy)?.map(key => slotGroupBy[key])
    const sortDate = tranform?.sort((prev, cur) => {
      return new Date(prev[0]?.date)?.valueOf() - new Date(cur[0]?.date)?.valueOf()
    })

    const sortTime = sortDate?.map(item => item?.sort((prev, cur) => {
      return new Date(`${prev?.date} ${prev?.timeStart}`) - new Date(`${cur?.date} ${cur?.timeStart}`)
      // return prev.time.localeCompare(cur.time)
    }))

    this.restaurauntLoadable = {
      ...response?.data,
      slot: sortTime
    }
  }
}

export const useHomeIdStore: HomeIdViewStore = new HomeIdViewStore()
