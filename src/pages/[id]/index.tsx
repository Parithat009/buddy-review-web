import React from 'react'
import Head from 'next/head'
import HomeIdViewPage from '../../route/homeId/HomeIdViewPage'

const HomeId = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Restauraunt App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIdViewPage />
    </React.Fragment>
  )
}

export default HomeId
