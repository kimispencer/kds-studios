import Image from 'next/image'
import { ProjectImage } from '@/lib/interfaces'
import styles from '@/styles/components/ScreenshotImage.module.scss'

type Props = {
  image: ProjectImage
  imageKey: string
}

const ScreenshotImage = ({ image, imageKey }: Props) => {
  return (
    <div className={styles.screenshotImageContainer}>
      <Image
        src={"/images/" + imageKey + "/" + image.imageFile}
        alt={image.imageText}
        loading="lazy"
        fill
      />
    </div>
  )
}

export default ScreenshotImage