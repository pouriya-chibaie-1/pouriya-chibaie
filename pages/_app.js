import '../styles/globals.css'
import '../styles/font.css'
import {useState} from 'react'
import { Provider } from '../context/context'
function MyApp({ Component, pageProps }) {
  return<Provider>
  <Component {...pageProps} />

  </Provider>
}

export default MyApp
