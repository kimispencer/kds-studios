import { useState } from 'react'
import Image from 'next/image'
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
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={styles.screenshotImageContainer} style={{backgroundColor: backgroundColor}}>
      <div className={styles.screenshotImageContainer} style={{backgroundColor: backgroundColor}}>
        <div
          className={concatClassnames(
            styles.screenshotScrollContainer,
            !fullscreen ? styles.scrollable : styles.fullscreen
          )}
        >
          <Image
            className={concatClassnames(
              styles.screenshotImage,
              isLoading
                ? styles.loading
                : styles.loaded
            )}
            key={imageKey + "-" + image.imageFile}
            src={"/images/" + imageKey + "/" + image.imageFile}
            alt={image.imageText}
            loading="lazy"
            fill
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default ScreenshotImage