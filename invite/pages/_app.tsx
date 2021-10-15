import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import * as C from '../styles/main'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <C.Wrapper>
      <Component {...pageProps} />
      <GlobalStyle/>
    </C.Wrapper>
  )
}
export default MyApp
