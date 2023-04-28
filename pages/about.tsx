import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/pages/About.module.scss'

const About = () => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={styles.aboutPage}>
      <figure className={styles.aboutImage}>
        <Image
          alt=""
          src="https://loremflickr.com/1200/800"
          fill
          // placeholder="blur"
          className={concatClassnames(
            styles.aboutImage,
            isLoading
              ? styles.loading
              : styles.loaded
          )}
          onLoadingComplete={() => setLoading(false)}
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
          <p>CV upon request.</p>
          <br/>
          <p className={styles.aboutContact}>Contact</p>
        </div>
      </div>
    </div>
  )
}
export default About