
import Link from 'next/link'
import LoadingImage from '@/components/LoadingImage'
import SvgIcon from '@/components/SvgIcon'
import styles from '@/styles/pages/About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <figure className={styles.aboutImage}>
        <LoadingImage
          priority={true}
          keyString={"about-00"}
          imageKey="about"
          fileName="profile_bdcmco.jpg"
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
          <p>KDS Studios is a digital studio and the design practice of Kimi Spencer, a product designer & former software engineer with a Masters degree in Interactive Technology and Design from NYU Tisch, and a Bachelors degree from UC Berkeley.</p>
          <br/>
          <p>At KDS Studios she has worked with clients from San Francisco startups to NYC digital agencies; spanning industries from interactive advertising, online magazines/publications, AI driven applications, to high-end fashion.</p>
          <br/>
          <p>CV available upon request.</p>
          <br/>
          <div className={styles.logoContainer}>
            <Link href="https://www.linkedin.com/in/kimispencer/" target="_blank">
              <SvgIcon type="LinkedIn" />
            </Link>
            <Link href="https://github.com/kimispencer" target="_blank">
              <SvgIcon type="Github" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About