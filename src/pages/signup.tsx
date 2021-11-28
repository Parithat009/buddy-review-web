import React from 'react'
import Head from 'next/head'
import SignupViewPage from '../route/signup/SignupViewPage'

const SignUp: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignupViewPage />
    </React.Fragment>
  )
}

export default SignUp
