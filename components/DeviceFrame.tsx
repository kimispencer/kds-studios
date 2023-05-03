import Image from 'next/image'
import { ProjectImage } from '@/lib/interfaces'
import ScreenshotImage from "@/components/ScreenshotImage"
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/DeviceFrame.module.scss'

type Props = {
  image: ProjectImage
  imageKey: string
}

const DeviceFrame = ({ image, imageKey }: Props) => {
  switch (image.imageType) {
    case "iphone":
      return (
        <div className={styles.iphoneDeviceContainer}>
          <div className="device device-iphone-x">
            <div className="device-frame">
              <Image
                className={concatClassnames(
                  "device-screen",
                  styles.deviceScreen
                )}
                src={"/images/" + imageKey + "/" + image.imageFile}
                alt={image.imageText}
                loading="lazy"
                fill
              />
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
      )
    case "desktop":
      return (
        <div className={styles.desktopDeviceContainer}>
          <div className="device device-macbook-pro">
            <div className="device-frame">
              <Image
                className={concatClassnames(
                  "device-screen",
                  styles.deviceScreen
                )}
                src={"/images/" + imageKey + "/" + image.imageFile}
                alt={image.imageText}
                loading="lazy"
                fill
              />
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
            <div className="device-home"></div>
          </div>
        </div>
      )
    default:
      return (
        <ScreenshotImage image={image} imageKey={imageKey} />
      )
  }
}

export default DeviceFrame