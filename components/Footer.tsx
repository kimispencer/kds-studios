import Link from 'next/link'
import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/projects/" className={styles.footerLink}>
          <h4>Work</h4>
      </Link>
      <Link href="/skills/" className={styles.footerLink}>
          <h4>Skills</h4>
      </Link>
      <Link href="/about/" className={styles.footerLink}>
          <h4>About</h4>
      </Link>
      <Link href="mailto:hello@kimispencer.com" className={styles.footerLink}>
          <h4>Contact</h4>
      </Link>
      <br/>
      <p className={styles.copyRight}>© KDS Studios Inc 2024</p>
    </div>
  )
}
export default Footer