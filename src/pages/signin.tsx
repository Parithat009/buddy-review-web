import React from 'react'
import Head from 'next/head'
import SigninViewPage from '../route/signin/SigninViewPage'

const SignIn = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SigninViewPage />
    </React.Fragment>
  )
}

export default SignIn
