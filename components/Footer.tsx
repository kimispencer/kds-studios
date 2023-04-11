import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.contact}>Contact</p>
      <br/>
      <p className={styles.copyRight}>© KDS Studios Inc 2023</p>
    </div>
  )
}
export default Footer