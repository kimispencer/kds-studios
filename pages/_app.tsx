import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>KDS Studio</title>
      <meta name="description" content="KDS Studio's portfolio site" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
