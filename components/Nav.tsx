import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Tab } from '@/lib/interfaces';
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/Nav.module.scss'

const tabs: Tab[] =
  [
    { path: "/projects"
    , name: "Work"
    },
    { path: "/services"
    , name: "Services"
    },
    { path: "/about"
    , name: "About"
    },
    { path: "/contact"
    , name: "Contact"
    },
  ]

const Nav = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  // set active tab
  tabs.forEach((tab) => {
    tab.active = router.pathname === tab.path
  })

  const NavLink = ({path, name, active}: Tab) => {
    useEffect(() => {
      const handleRouteChange = () => {
        setMobileOpen(false)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    }, [])
    return (
      <Link href={path}
        className={concatClassnames(
          styles.navLink,
          active ? styles.active : ""
        )}
      >
        {name}
      </Link>
    )
  }

  return (
    <nav
      className={concatClassnames(
        styles.nav,
        isMobileOpen ? styles.mobileOpen : styles.mobileClosed
      )}
    >
      <Link href="/" className={styles.logo}>KDS Studios</Link>
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          {tabs.map((item, i) => {
            return (
              <NavLink key={i} {...item} />
            )
          })
          }
        </div>
      </div>
      <div className={styles.hamburgerBtn} onClick={() => setMobileOpen(!isMobileOpen)}>
        <span className={styles.openBtn}>|||</span>
        <span className={styles.closeBtn}>X</span>
      </div>
    </nav>
  )
}
export default Nav