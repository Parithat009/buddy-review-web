import React from 'react'
import Head from 'next/head'
import HomeViewPage from '../route/home/HomeViewPage'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Restauraunt App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeViewPage />
    </React.Fragment>
  )
}

export default Home
