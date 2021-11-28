import React from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { useSignupStore, State } from './SignupViewStore'
import LayoutDefault from '../../component/layout/LayoutDefault'
import TitlePage from '../../component/TitlePage'
import Input from '../../component/Input'
import Button from '../../component/Button'
import SignupContainer from './component/SignupContainer'

const _SignUpViewPage: React.FC = () => {
  const router = useRouter()
  const viewStore = useSignupStore

  const handleSignup = async (): Promise<void> => {
    await viewStore.submit()

    if (viewStore.status === 'success') {
      router.push('/signin')
      viewStore.setStatus('default')
    }
  }

  const handleFocus = (key: keyof State): void => {
    viewStore.setStatus('default')
    viewStore.setState(key, false)
  }

  return (
    <LayoutDefault>
      <SignupContainer>
        <TitlePage title='Sign Up' />
        <Input
          type='text'
          label='Username'
          placeholder='Enter username ...'
          validate={viewStore.state.isUsernameInvalid && 'Please enter username' || ''}
          onChange={(value) => viewStore.setState('username', value)}
          onFocus={() => handleFocus('isUsernameInvalid')}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Enter password ...'
          validate={viewStore.state.isPasswordInvalid && 'Please enter password' || ''}
          onChange={(value) => viewStore.setState('password', value)}
          onFocus={() => handleFocus('isPasswordInvalid')}
        />
        <Button
          onClick={handleSignup}
          messageError={viewStore.status === 'error' && '*** SIGN UP FAILED ***' || ''}
        >
          SIGN UP
        </Button>
      </SignupContainer>
    </LayoutDefault>
  )
}

const SignUpViewPage = observer(_SignUpViewPage)
export default SignUpViewPage
