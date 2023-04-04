import { useState } from 'react'
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

const NavItem = (data: NavItemData) => {
  return (
    <Link href={data.to} className={styles.navItem}>{data.name}</Link>
  )
}

export default function Nav() {
  // rather than using state use a checkbox input
  const [isMobileOpen, setMobileOpen] = useState(false);

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