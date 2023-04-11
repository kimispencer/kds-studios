import { useState } from 'react'
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
          <p>CLIENTS:</p>
          <br/>
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </div>
        <div className={styles.aboutDescription}>
          <p>KDS Studios is a digital studio and the design practice of Kimi Spencer. In 2012 she graduated with a Masters degree in Interactive Technology and Design from NYU, Tisch</p>
          <br/>
          <p>At KDS Studios she has worked with clients from San Francisco startups to NYC digital agencies; spanning industries from interactive advertising, online magazines/publications, AR games for museum education, to high-end fashion.</p>
          <br/>
          <p>CV upon request.</p>
          <br/>
          <p className={styles.aboutEmail}>Email me</p>
        </div>
      </div>
    </div>
  )
}
export default About