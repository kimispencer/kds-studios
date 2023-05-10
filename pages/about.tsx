
import Link from 'next/link'
import Image from 'next/image'
import LazyImage from '@/components/LazyImage'
import styles from '@/styles/pages/About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <figure className={styles.aboutImage}>
        <LazyImage
          priority={true}
          keyString={"about-00"}
          src="/images/about/profile.jpg"
          alt="About KDS Studios"
          className={styles.aboutImage}
        />
        {/* <figcaption>image caption</figcaption> */}
      </figure>
      <div className={styles.aboutCopy}>
        <div className={styles.aboutClients}>
          <p className={styles.clientsTitle}>Clients:</p>
          <p>Smarty AI</p>
          <p>Lumi</p>
          <p>The Arrivals</p>
          <p>SUITED Magazine</p>
          <Link href="/projects">
            <p>+ more</p>
          </Link>
        </div>
        <div className={styles.aboutDescription}>
          <p>KDS Studios is a digital studio and the design practice of Kimi Spencer, a product designer & software engineer with a Masters degree in Interactive Technology and Design from NYU, Tisch</p>
          <br/>
          <p>At KDS Studios she has worked with clients from San Francisco startups to NYC digital agencies; spanning industries from interactive advertising, online magazines/publications, AI driven applications, to high-end fashion.</p>
          <br/>
          <p>CV available upon request.</p>
          <br/>
          <div className={styles.logoContainer}>
            <Link href="https://github.com/kimispencer" target="_blank">
              <Image alt="LinkedIn logo" src="/images/icons/linkedin.svg" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/kimispencer/" target="_blank">
              <Image alt="Github logo" src="/images/icons/github.svg" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About