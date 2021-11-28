import { makeAutoObservable } from 'mobx'
import { ApiPostSignup } from '../../setting/api'
import { AppTypes } from '../../type/AppType'

export interface State {
  username: string;
  isUsernameInvalid: boolean;
  password: string;
  isPasswordInvalid: boolean;
}

class SignupViewStore {
  status: AppTypes.Status = 'default'
  state: State = {
    username: '',
    isUsernameInvalid: false,
    password: '',
    isPasswordInvalid: false
  }

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
    const isUsernameInValid = !(this.state.username && this.state.username.trim().length >= 5)
    const isPasswordInValid = !(this.state.password && this.state.password.trim().length >= 6)

    this.setState('isUsernameInvalid', isUsernameInValid)
    this.setState('isPasswordInvalid', isPasswordInValid)

    return (
      isUsernameInValid
      || isPasswordInValid
    )
  }

  async submit() {
    const isInValid = this.verify()
    if (isInValid) return

    try {
      const response = await ApiPostSignup.post({
        username: this.state.username,
        password: this.state.password
      })

      if (response?.status !== 201) return
      this.status = 'success'

    } catch (error) {
      this.status = 'error'
    }
  }
}

export const useSignupStore: SignupViewStore = new SignupViewStore()
