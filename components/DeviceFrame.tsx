import { ProjectImage } from '@/lib/interfaces'
import ScreenshotImage from "@/components/ScreenshotImage"
import styles from '@/styles/components/DeviceFrame.module.scss'

type Props = {
  image: ProjectImage
}

const DeviceFrame = ({ image }: Props) => {
  switch (image.imageType) {
    case "iphone":
      return (
        <div className={styles.test}>
        <div className={styles.iphoneDeviceContainer}>
          <div className="device device-iphone-x">
            <div className="device-frame">
              {/* <img className="device-screen" src="..."> */}
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
        </div>
      )
    case "desktop":
      return (
        <div className={styles.desktopDeviceContainer}>
          <div className="device device-macbook-pro">
            <div className="device-frame">
              {/* <img className="device-screen" src="assets/img/bg-10.jpg" loading="lazy"> */}
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
        <ScreenshotImage image={image} />
      )
  }
}

export default DeviceFrame