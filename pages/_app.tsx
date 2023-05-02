import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import '@/styles/devices.scss'
import { Chivo } from 'next/font/google'

const chivo = Chivo({ subsets: ['latin'] })
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <title>KDS Studio</title>
      <meta name="description" content="KDS Studio's portfolio site" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={chivo.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </>
  )
}
export default App
