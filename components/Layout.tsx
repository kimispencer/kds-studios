import { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '@/styles/Layout.module.scss'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
export default Layout