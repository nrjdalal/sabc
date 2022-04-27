/* eslint-disable @next/next/no-img-element */

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative overflow-x-hidden font-nunito text-lg font-light tracking-wide text-white">
      <img src="/Samurai Background.jpg" alt="" className="fixed -z-20 h-screen w-screen object-cover object-center" />
      <div className="fixed -z-10 h-screen w-screen bg-black bg-opacity-50"></div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
