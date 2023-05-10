import LazyImage from '@/components/LazyImage'
import { ProjectImage } from '@/lib/interfaces'
import ScreenshotImage from "@/components/ScreenshotImage"
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/DeviceFrame.module.scss'

type Props = {
  priority: boolean
  image: ProjectImage
  imageKey: string
  backgroundColor?: string
  fullscreen: boolean
}

const DeviceFrame = ({ priority, image, imageKey, backgroundColor, fullscreen }: Props) => {
  switch (image.imageType) {
    case "iphone":
      return (
        <div className="device device-iphone-x">
          <div className="device-frame">
            <div
              className={concatClassnames(
                "device-screen",
                styles.deviceScreen
              )}
            >
              <LazyImage
                priority={priority}
                keyString={imageKey + "-" + image.imageFile}
                src={"/images/" + imageKey + "/" + image.imageFile}
                alt={image.imageText}
                className={styles.deviceImage}
              />
            </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      )
    case "desktop":
      return (
        <div className="device device-macbook-pro">
          <div className="device-frame">
            <div
              className={concatClassnames(
                "device-screen",
                styles.deviceScreen
              )}
            >
              <LazyImage
                priority={priority}
                keyString={imageKey + "-" + image.imageFile}
                src={"/images/" + imageKey + "/" + image.imageFile}
                alt={image.imageText}
                className={styles.deviceImage}
              />
            </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      )
    default:
      return (
        <ScreenshotImage
          priority={priority}
          image={image}
          imageKey={imageKey}
          backgroundColor={backgroundColor}
          fullscreen={fullscreen}
        />
      )
  }
}

export default DeviceFrame