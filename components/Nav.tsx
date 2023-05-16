import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Tab } from '@/lib/interfaces';
import { concatClassnames } from '@/lib/functions'
import styles from '@/styles/components/Nav.module.scss'

const tabs: Tab[] =
  [ { path: "/projects"
    , name: "Work"
    }
  , { path: "/skills"
    , name: "Skills"
    }
  , { path: "/about"
    , name: "About"
    }
  ]

const Nav = () => {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  // set active tab
  tabs.forEach((tab) => {
    tab.active = router.pathname === tab.path
  })
  // disable page scroll when mobile nav is open
  useEffect(() => {
    isMobileOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [isMobileOpen])

  const NavLink = ({path, name, active}: Tab) => {
    // on route change close mobile nav
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
        <p>{name}</p>
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
      <Link href="/" className={styles.logo}>
        <p>KDS Studios</p>
      </Link>
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
        <div className={isMobileOpen ? styles.openHamburgerBtn : styles.closedCrossBtn}>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
export default Nav