import Link from 'next/link'
import Image from 'next/image'
import LoadingImage from '@/components/LoadingImage'
import { getImageUrl } from '@/util/functions'
import styles from '@/styles/pages/Home.module.scss'

type BackgroundImageProps = {
  alt: string
  src: string
  priority: boolean
}

const BackgroundImage = ({ alt, src, priority }: BackgroundImageProps) => {
  return (
    <Image
      priority={priority}
      alt={alt}
      src={getImageUrl("homepage", src)}
      quality={25}
      fill
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

const Home = () => {
  const imageKey = "homepage"
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageAboveFold}>
        <h1 className={styles.aboveFoldHeader}>KDS Studios is a digital product studio, and the design practice of Kimi Spencer.</h1>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageBackgroundImageContainer}>
          <BackgroundImage
            priority={true}
            alt="Featured work background image"
            src="featured-work-00-alt_aqzgfn.jpg"
          />
          <div className={styles.homepageImageOverlay}>
            <h2>Featured Work</h2>
            <Link href="/projects/arrivals" className={styles.featuredWorkImageLink}>
              <div className={styles.homepageImageContainer}>
                <LoadingImage
                  priority={true}
                  keyString="featuredWork"
                  imageKey={imageKey}
                  fileName="featured-project-00_vkava1.jpg"
                  alt="Featured work"
                />
              </div>
            </Link>
            <h4 className={styles.featuredWorkText}>Responsive website design & development for an architecturally-inspired NYC based fashion line.</h4>
            <Link href="/projects/arrivals" className={styles.featuredWorkLink}><h4>View project</h4></Link>
          </div>
        </div>
        <h4 className={styles.homepageSlideText}>Kimi Spencer is a product designer, engineer & founder of KDS Studios, a digital product studio that focuses on design and development.</h4>
        <Link href="/projects" className={styles.homepageSlideLink}>
          <h4>View all projects</h4>
        </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageBackgroundImageContainer}>
          <BackgroundImage
            priority={false}
            alt="Case study background image"
            src="/featured-work-01_w941ex.jpg"
          />
          <div className={styles.homepageImageOverlay}>
            <h2>Case Study</h2>
            <Link href="/projects/lumi" className={styles.featuredWorkImageLink}>
              <div className={styles.homepageImageContainer}>
                <LoadingImage
                  priority={false}
                  keyString="caseStudy"
                  imageKey={imageKey}
                  fileName="featured-project-01-alt_qvfeay.jpg"
                  alt="Case study"
                />
              </div>
            </Link>
            <h4 className={styles.featuredWorkText}>Design & development of a modular UI design system for an LA based sustainable packaging marketplace.</h4>
            <Link href="/projects/lumi" className={styles.featuredWorkLink}><h4>View project</h4></Link>
          </div>
        </div>
        <h4 className={styles.homepageSlideText}>KDS Studios creates digital identity and experiences through concept development, UI/UX & visual design, and creative coding solutions.</h4>
        <Link href="/skills" className={styles.homepageSlideLink}>
          <h4>View all skills</h4>
        </Link>
      </div>
      <div className={styles.homepageSlide}>
        <div className={styles.homepageBackgroundImageContainer}>
          <BackgroundImage
            priority={false}
            alt="All projects background image"
            src="/background-00_wyt8pr.jpg"
          />
          <div className={styles.homepageImageOverlay}>
            <h2>Amazing clients, amazing products</h2>
            <Link href="/projects/" className={styles.featuredWorkLink}><h4>View all projects</h4></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home