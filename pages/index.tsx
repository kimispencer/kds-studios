import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import styles from '@/styles/pages/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageAboveFold}>
        <h1 className={styles.aboveFoldHeader}>KDS Studios is a digital product agency that focuses on design and development.</h1>
        {/* <h1 className={styles.header}>Kimi is a product designer and software engineer based in Brooklyn, NY. Currently the Founder & Principle Designer at KDS Studios.</h1> */}
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageSlideBackgroundImage} style={{backgroundImage: "url(" + "/images/homepage/featured-work-00.jpg" + ")"}}>
          <h2>Featured Work</h2>
          <LazyImage
            keyString="featuredWork"
            src="/images/homepage/featured-project-00.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <h5 className={styles.featuredWorkText}>Responsive website design and development for a NYC based fashion line.</h5>
          <Link href="/projects/the-arrivals" className={styles.featuredWorkLink}><h5>View project</h5></Link>
        </div>
        <h4 className={styles.homepageSlideText}>KDS Studios is a digital studio and the design practice of Kimi Spencer, a product designer & software engineer.</h4>
        <Link href="/projects" className={styles.homepageSlideLink}>
          <h4>View all projects</h4>
      </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageSlideBackgroundImage} style={{backgroundImage: "url(" + "/images/homepage/featured-work-01.jpg" + ")"}}>
          <h2>Case Study</h2>
          <LazyImage
            keyString="featuredWork"
            src="/images/homepage/featured-project-01.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <h5 className={styles.featuredWorkText}>Website and UI component library design and development for an LA based packaging company.</h5>
          <Link href="/projects/lumi" className={styles.featuredWorkLink}><h5>View project</h5></Link>
        </div>
        <h4 className={styles.homepageSlideText}>KDS Studios creates digital identity and experiences through concept development, UI/UX & visual design, and creative coding solutions.</h4>
        <Link href="/about" className={styles.homepageSlideLink}>
          <h4>Learn more</h4>
      </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageSlideBackgroundImage} style={{backgroundImage: "url(" + "/images/homepage/background-00.jpg" + ")"}}>
          <h2>Amazing clients, amazing products</h2>
          <Link href="/projects/" className={styles.featuredWorkLink}><h5>View all projects</h5></Link>
        </div>
      </div>
    </div>
  )
}
export default Home