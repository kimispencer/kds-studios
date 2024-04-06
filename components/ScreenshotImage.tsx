import LoadingImage from '@/components/LoadingImage'
import { ProjectSection } from '@/util/interfaces'
import { concatClassnames } from '@/util/functions'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  priority: boolean
  section: ProjectSection
  imageKey: string
  backgroundColor?: string
  fullscreen: boolean
}

const ScreenshotImage = ({ priority, section, imageKey, backgroundColor, fullscreen }: Props) => {
  return (
    <div className={styles.screenshotImageContainer} style={{backgroundColor: fullscreen ? "" : backgroundColor}}>
      <div
        className={concatClassnames(
          styles.screenshotScrollContainer,
          !fullscreen ? styles.scrollable : styles.fullscreen
        )}
      >
        <LoadingImage
          priority={priority}
          keyString={imageKey + "-" + section.imageFile}
          imageKey={imageKey}
          fileName={section.imageFile}
          alt={section.projectSectionHeader}
          className={styles.screenshotImage}
        />
      </div>
    </div>
  )
}

export default ScreenshotImage