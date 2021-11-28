import React from 'react'
import { useRouter } from 'next/router'
import { AppLocalStorage } from '../util/AppLocalStorage'

const AuthWidget: React.FC = () => {
  const router = useRouter()

  const verifyAuth = (): void => {
    if (
      router.pathname === '/signin'
      || router.pathname === '/signup'
    ) {
      const token = AppLocalStorage.get('authorize')
      if (!token) return
      router.push('/')
    }
  }

  React.useEffect(() => {
    verifyAuth()
  }, [router])

  return null
}

export default AuthWidget
