import Link from 'next/link'
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
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <NavItem {...{to: "/", name: "logo"}} />
      </div>
      <div className={styles.navRight}>
        { NAV_ITEMS.map((item, i) => {
          return (
            // <Link key={i} href={item.to} className={styles.navItem}>{item.name}</Link>
            <NavItem key={i} {...item} />
          )
        })
        }
      </div>
    </nav>
  )
}