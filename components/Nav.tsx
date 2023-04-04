import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/NavBar.module.scss'

type NavItemData =
  {
    to: string, //URL,
    name: string,
  }

// interface NavItemData
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
  const NavItem = ({to, name}: NavItemData) => {
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
      <Link href={to} className={styles.navItem}>{name}</Link>
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
      <NavItem {...{to: "/", name: "logo"}} />
      <div className={styles.navLinks}>
        { NAV_ITEMS.map((item, i) => {
          return (
            // <Link key={i} href={item.to} className={styles.navItem}>{item.name}</Link>
            <NavItem key={i} {...item} />
          )
        })
        }
      </div>
      <span className={styles.hamburgerBtn} onClick={() => setMobileOpen(!isMobileOpen)}>|||</span>
    </nav>
  )
}