import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RendererProvider } from 'react-fela'
import { AppFela } from '../setting/fela/AppFela'
import AuthWidget from '../widget/AuthWidget'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RendererProvider renderer={AppFela.render}>
      <AuthWidget />
      <Component {...pageProps} />
    </RendererProvider>
  )
}

export default MyApp
