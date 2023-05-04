import LazyImage from '@/components/LazyImage'
import { ProjectImage } from '@/lib/interfaces'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  image: ProjectImage
  imageKey: string
  backgroundColor: string
  fullscreen: boolean
}

const ScreenshotImage = ({ image, imageKey, backgroundColor, fullscreen }: Props) => {
  return (
    <div className={styles.screenshotImageContainer} style={{backgroundColor: backgroundColor}}>
      <div className={styles.screenshotImageContainer} style={{backgroundColor: backgroundColor}}>
        <div
          className={concatClassnames(
            styles.screenshotScrollContainer,
            !fullscreen ? styles.scrollable : styles.fullscreen
          )}
        >
          <LazyImage
            keyString={imageKey + "-" + image.imageFile}
            src={"/images/" + imageKey + "/" + image.imageFile}
            alt={image.imageText}
            className={styles.screenshotImage}
          />
        </div>
      </div>
    </div>
  )
}

export default ScreenshotImage