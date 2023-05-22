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
      <title>KDS Studios</title>
      <meta name="description" content="KDS Studios" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/kds.ico" />
      <meta property="og:title"content="KDS Studios"/>
      <meta property="og:image" content="https://res.cloudinary.com/dq4mmu4m3/image/upload/w_1200,h_620,c_crop/v1684340256/KDS-studios/about/profile_bdcmco.jpg" />
      <meta property="og:description" content="KDS Studios creates digital identity and experiences through concept development, UI/UX & visual design, and creative coding solutions." />
      <meta property="og:url" content="https://www.kds.studio/"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
