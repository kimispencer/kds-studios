import { Project, ProjectImage } from '@/util/interfaces'
import { concatClassnames } from '@/util/functions'
import DeviceFrame from "@/components/DeviceFrame"
import ScreenshotImage from "@/components/ScreenshotImage"
import styles from '@/styles/pages/Projects.module.scss'


type Props = {
  key: number
  image: ProjectImage
  project: Project
}

const ProjectSection = ({ key, image, project }: Props) => {
  switch (image.imageType) {
    case "iphone":
      return (
        <div
          key={project.slug + "-" + key}
          className={concatClassnames(
            styles.projectDetailImageSlide,
            styles.iphone
          )}
        >
          <DeviceFrame
            priority={key == 0 ? true : false}
            image={image}
            imageKey={project.imageKey}
            backgroundColor={project.backgroundColor}
            fullscreen={project.fullscreen}
          />
          <div className={styles.deviceImageTextContainer}>
            <div className={styles.deviceImageText}>
              <h4>{image.imageHeader}</h4>
              <h5>{image.imageText}</h5>
            </div>
          </div>
        </div>
      )
    case "screenshot":
      return (
        <div
          key={project.slug + "-" + key}
          className={concatClassnames(styles.projectDetailImageSlide, styles.screenshot)}
        >
          <ScreenshotImage
            priority={key == 0 ? true : false}
            image={image}
            imageKey={project.imageKey}
            backgroundColor={project.backgroundColor}
            fullscreen={project.fullscreen}
          />
          <div className={styles.screenshotImageTextContainer}>
            <div className={styles.screenshotImageText}>
              <h4>{image.imageHeader}</h4>
              <h5>{image.imageText}</h5>
            </div>
          </div>
        </div>
      )
    case "none":
      return (
        <div className={styles.screenshotImageTextContainer}>
          <div className={styles.screenshotImageText}>
            <h4>{image.imageHeader}</h4>
            <h5>{image.imageText}</h5>
          </div>
        </div>
      )
    default: return (<></>)
  }
}

export default ProjectSection