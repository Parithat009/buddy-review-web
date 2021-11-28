import React from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { useSigninStore, State } from './SigninViewStore'
import LayoutDefault from '../../component/layout/LayoutDefault'
import TitlePage from '../../component/TitlePage'
import Input from '../../component/Input'
import Button from '../../component/Button'
import SigninContainer from './component/SigninContainer'

const _SigninViewPage: React.FC = () => {
  const router = useRouter()
  const viewStore = useSigninStore

  const handleSignin = async (): Promise<void> => {
    await viewStore.submit()

    if (viewStore.status === 'success') {
      viewStore.setStatus('default')
      viewStore?.resetState()
      router.push('/')
    }
  }

  const goToSignup = (): void => {
    router.push('/signup')
    viewStore?.setStatus('default')
    viewStore?.resetState()
  }

  const handleFocus = (key: keyof State): void => {
    viewStore.setStatus('default')
    viewStore.setState(key, false)
  }

  return (
    <LayoutDefault>
      <SigninContainer>
        <TitlePage title='Sign In' />
        <Input
          type='text'
          label='Username'
          placeholder='Enter username ...'
          value={viewStore?.state?.username}
          validate={viewStore.state.isUsernameInvalid && 'Please enter username' || ''}
          onChange={(value) => viewStore.setState('username', value)}
          onFocus={() => handleFocus('isUsernameInvalid')}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Enter password ...'
          value={viewStore?.state?.password}
          validate={viewStore.state.isPasswordInvalid && 'Please enter password' || ''}
          onChange={(value) => viewStore.setState('password', value)}
          onFocus={() => handleFocus('isPasswordInvalid')}
        />
        <Button
          onClick={handleSignin}
          messageError={viewStore.status === 'error' && '*** SIGN IN FAILED ***' || ''}
        >
          SIGN IN
        </Button>
        <Button onClick={goToSignup}>
          SIGN UP
        </Button>
      </SigninContainer>
    </LayoutDefault>
  )
}

const SigninViewPage = observer(_SigninViewPage)
export default SigninViewPage
