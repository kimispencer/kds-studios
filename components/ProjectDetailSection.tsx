import { Project, ProjectSection } from '@/util/interfaces'
import { concatClassnames } from '@/util/functions'
import DeviceFrame from "@/components/DeviceFrame"
import ScreenshotImage from "@/components/ScreenshotImage"
import styles from '@/styles/components/ProjectDetailSection.module.scss'


type Props = {
  key: number
  section: ProjectSection
  project: Project
}

const ProjectDetailSection = ({ key, section, project }: Props) => {
  switch (section.imageType) {
    case "iphone":
      return (
        <div
          key={project.slug + "-" + key}
          className={concatClassnames(styles.projectDetailSection, styles.iphone)}
        >
          <DeviceFrame
            priority={key == 0 ? true : false}
            section={section}
            imageKey={project.imageKey}
          />
          <div className={styles.deviceImageTextContainer}>
            <div className={styles.deviceImageText}>
              <h4 className={styles.textHeader}>{section.projectSectionHeader}</h4>
              <h5>{section.projectSectionText.textCopy}</h5>
            </div>
          </div>
        </div>
      )
    case "screenshot":
      return (
        <div
          key={project.slug + "-" + key}
          className={concatClassnames(styles.projectDetailSection, styles.screenshot)}
        >
          {section.projectSectionText.textType !== "none"
            ?
            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <h4 className={styles.textHeader}>{section.projectSectionHeader}</h4>
                <h5>{section.projectSectionText.textCopy}</h5>
              </div>
            </div>
            : <></>
          }
          <ScreenshotImage
            priority={key == 0 ? true : false}
            section={section}
            imageKey={project.imageKey}
            backgroundColor={project.backgroundColor}
            fullscreen={project.fullscreen}
          />
        </div>
      )
    case "none":
      return (
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <h4 className={styles.textHeader}>{section.projectSectionHeader}</h4>
            {section.projectSectionText.textType == "columns"
              ? <div className={styles.columnTextContainer}>
                  {section.projectSectionText.columnCopy.map((copy, i) => {
                    return (
                      <h5 className={styles.columnText} key={i}>{copy}</h5>
                    )
                  })}
                </div>
              : <h5>{section.projectSectionText.textCopy}</h5>
            }
          </div>
        </div>
      )
    default: return (<></>)
  }
}

export default ProjectDetailSection