import Image from 'next/image'
import { ProjectImage } from '@/lib/interfaces'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  image: ProjectImage
  imageKey: string
  backgroundColor: string
}

const ScreenshotImage = ({ image, imageKey, backgroundColor }: Props) => {
  return (
    <div className={styles.screenshotImageContainer} style={{backgroundColor: backgroundColor}}>
      <div className={styles.screenshotScrollContainer}>
        <Image
          className={styles.screenshotImage}
          src={"/images/" + imageKey + "/" + image.imageFile}
          alt={image.imageText}
          loading="lazy"
          fill
        />
      </div>
    </div>
  )
}

export default ScreenshotImage