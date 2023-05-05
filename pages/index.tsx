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
          <h1>Featured Work</h1>
          <LazyImage
            keyString="featuredWork"
            src="/images/homepage/featured-project-00.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <p>Responsive website design and development for a NYC based fashion line.</p>
          <Link href="/projects/the-arrivals" className={styles.featuredWorkLink}>View project</Link>
        </div>
        <h4 className={styles.homepageSlideText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h4>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageSlideBackgroundImage} style={{backgroundImage: "url(" + "/images/homepage/featured-work-01.jpg" + ")"}}>
          <h1>Case Study</h1>
          <LazyImage
            keyString="featuredWork"
            src="/images/homepage/featured-project-01.jpg"
            alt="Featured work"
            className={styles.homepageFeaturedWorkImage}
          />
          <p>Website and UI component library design for a LA based packaging company with multiple dashboards target different user types.</p>
          <Link href="/projects/lumi" className={styles.featuredWorkLink}>View project</Link>
        </div>
        <h4 className={styles.homepageSlideText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h4>
      </div>
      {/* <div className={styles.homepageSlide}>
        <LazyImage
          keyString="introImage"
          src="/images/homepage/intro-02.jpg"
          alt="KDS Studios"
          className={styles.homepageSlideImage}
        />
        <h4 className={styles.homepageSlideText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</h4>
      </div> */}
    </div>
  )
}
export default Home