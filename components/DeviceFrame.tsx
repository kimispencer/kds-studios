import LoadingImage from '@/components/LoadingImage'
import { ProjectSection } from '@/util/interfaces'
import ScreenshotImage from "@/components/ScreenshotImage"
import { concatClassnames } from '@/util/functions'
import styles from '@/styles/components/DeviceFrame.module.scss'

type Props = {
  priority: boolean
  section: ProjectSection
  imageKey: string
}

const DeviceFrame = ({ priority, section, imageKey }: Props) => {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div
          className={concatClassnames(
            "device-screen",
            styles.deviceScreen
          )}
        >
          <LoadingImage
            priority={priority}
            keyString={imageKey + "-" + section.imageFile}
            imageKey={imageKey}
            fileName={section.imageFile}
            alt={section.projectSectionHeader}
            className={styles.deviceImage}
          />
        </div>
      </div>
      <div className="device-stripe"></div>
      {/* <div className="device-header"></div> */}
      {/* <div className="device-sensors"></div> */}
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  )
}

export default DeviceFrame