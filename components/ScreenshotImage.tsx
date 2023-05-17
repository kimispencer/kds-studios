import LazyImage from '@/components/LazyImage'
import { ProjectImage } from '@/util/interfaces'
import { concatClassnames } from '@/util/functions'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  priority: boolean
  image: ProjectImage
  imageKey: string
  backgroundColor?: string
  fullscreen: boolean
}

const ScreenshotImage = ({ priority, image, imageKey, backgroundColor, fullscreen }: Props) => {
  return (
    <div className={styles.screenshotImageContainer} style={{backgroundColor: fullscreen ? "" : backgroundColor}}>
      <div
        className={concatClassnames(
          styles.screenshotScrollContainer,
          !fullscreen ? styles.scrollable : styles.fullscreen
        )}
      >
        <LazyImage
          priority={priority}
          keyString={imageKey + "-" + image.imageFile}
          imageKey={imageKey}
          fileName={image.imageFile}
          alt={image.imageText}
          className={styles.screenshotImage}
        />
      </div>
    </div>
  )
}

export default ScreenshotImage