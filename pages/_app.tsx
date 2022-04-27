import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative overflow-x-hidden bg-black font-nunito text-lg font-light tracking-wide text-white">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
