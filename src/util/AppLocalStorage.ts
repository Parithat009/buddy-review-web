import { AppTypes } from '../type/AppType'

class _AppLocalStorage {
  get<Key extends keyof AppTypes.ILocalStorage>(key: Key): AppTypes.ILocalStorage[Key] {
    const isLocalStorage = localStorage.getItem(key) as AppTypes.ILocalStorage[Key]
    return isLocalStorage
  }

  set<Key extends keyof AppTypes.ILocalStorage>(
    key: Key,
    value: AppTypes.ILocalStorage[Key]
  ): void {
    localStorage.setItem(key, value)
  }

  remove<Key extends keyof AppTypes.ILocalStorage>(key: Key) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export const AppLocalStorage = new _AppLocalStorage()
