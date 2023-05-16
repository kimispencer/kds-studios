import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { getImageUrl } from '@/lib/functions'
import styles from '@/styles/pages/Home.module.scss'

const Home = () => {
  const imageKey = "homepage"
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageAboveFold}>
        <h1 className={styles.aboveFoldHeader}>KDS Studios is a digital studio and the design practice of Kimi Spencer.</h1>
      </div>
      <div className={styles.homepageSlide}>
        <div
          className={styles.homepageSlideBackgroundImage}
          style={{backgroundImage: "url(" + getImageUrl("homepage", "featured-work-00_rfb5am.jpg") + ")"}}
        >
          <h2>Featured Work</h2>
          <LazyImage
            priority={true}
            keyString="featuredWork"
            imageKey={imageKey}
            fileName="featured-project-00_gy0qa7.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <h5 className={styles.featuredWorkText}>Responsive website design and development for a NYC based fashion line.</h5>
          <Link href="/projects/the-arrivals" className={styles.featuredWorkLink}><h5>View project</h5></Link>
        </div>
        <h4 className={styles.homepageSlideText}>Kimi Spencer is a product designer, engineer & founder of KDS Studios, a digital product studio that focuses on design and development.</h4>
        <Link href="/projects" className={styles.homepageSlideLink}>
          <h4>View all projects</h4>
      </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div
          className={styles.homepageSlideBackgroundImage}
          style={{backgroundImage: "url(" + getImageUrl("homepage", "/featured-work-01_w941ex.jpg") + ")"}}
        >
          <h2>Case Study</h2>
          <LazyImage
            priority={false}
            keyString="featuredWork"
            imageKey={imageKey}
            fileName="featured-project-01_uj2l5l.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <h5 className={styles.featuredWorkText}>Website and UI component library design and development for an LA based packaging company.</h5>
          <Link href="/projects/lumi" className={styles.featuredWorkLink}><h5>View project</h5></Link>
        </div>
        <h4 className={styles.homepageSlideText}>KDS Studios creates digital identity and experiences through concept development, UI/UX & visual design, and creative coding solutions.</h4>
        <Link href="/skills" className={styles.homepageSlideLink}>
          <h4>Learn more</h4>
      </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div
          className={styles.homepageSlideBackgroundImage}
          style={{backgroundImage: "url(" + getImageUrl("homepage", "/background-00_wyt8pr.jpg") + ")"}}
        >
          <h2>Amazing clients, amazing products</h2>
          <Link href="/projects/" className={styles.featuredWorkLink}><h5>View all projects</h5></Link>
        </div>
      </div>
    </div>
  )
}
export default Home