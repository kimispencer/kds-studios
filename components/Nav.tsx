import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/NavBar.module.scss'

type NavLinkData =
  {
    to: string, //URL,
    name: string,
  }

// interface NavLinkData
//   {
//     to: string, //URL,
//     name: string,
//   }

const NAV_ITEMS =
  [
    { to: "/" , name: "Work" },
    { to: "/about" , name: "About" },
  ]

export default function Nav() {
  const [isMobileOpen, setMobileOpen] = useState(false)

  const NavLink = ({to, name}: NavLinkData) => {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = () => {
        setMobileOpen(false)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    }, [router])
    return (
      <Link href={to} className={styles.navLink}>{name}</Link>
    )
  }

  return (
    <nav
      className={concatClassnames(
        styles.nav,
        isMobileOpen
          ? styles.mobileOpen
          : styles.mobileClosed
      )}
    >
      <Link href="/" className={styles.logo}>KDS Studios</Link>
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          { NAV_ITEMS.map((item, i) => {
            return (
              <NavLink key={i} {...item} />
            )
          })
          }
        </div>
      </div>
      <span className={styles.hamburgerBtn} onClick={() => setMobileOpen(!isMobileOpen)}>|||</span>
    </nav>
  )
}