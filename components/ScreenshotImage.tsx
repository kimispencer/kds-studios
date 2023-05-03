import Image from 'next/image'
import { ProjectImage } from '@/lib/interfaces'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  image: ProjectImage
}

const ScreenshotImage = ({ image }: Props) => {
  return (
    <div className={styles.screenshotImageContainer}>
      <Image
        src={image.imagePath}
        alt={image.imageText}
        loading="lazy"
        fill
      />
    </div>
  )
}

export default ScreenshotImage