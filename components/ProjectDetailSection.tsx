import { Project, ProjectSection, ProjectSectionText } from '@/util/interfaces'
import { concatClassnames } from '@/util/functions'
import DeviceFrame from "@/components/DeviceFrame"
import ScreenshotImage from "@/components/ScreenshotImage"
import styles from '@/styles/components/ProjectDetailSection.module.scss'


type Props = {
  priority: boolean
  section: ProjectSection
  project: Project
}

const ProjectDetailSection = ({ priority, section, project }: Props) => {
  switch (section.imageType) {
    case "iphone":
      return (
        <div className={concatClassnames(styles.projectDetailSection, styles.iphone)}>
          <DeviceFrame
            priority
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
        <div className={concatClassnames(styles.projectDetailSection, styles.screenshot)}>
          <ProjectDetailText section={section} />
          <ScreenshotImage
            priority
            section={section}
            imageKey={project.imageKey}
            backgroundColor={project.backgroundColor}
            fullscreen={section.fullscreen}
          />
        </div>
      )
    case "none":
      return (<ProjectDetailText section={section} />)
    default: return (<></>)
  }
}

export default ProjectDetailSection

type TextContainerProps = {
  section: ProjectSection
}

const ProjectDetailText = ({ section }: TextContainerProps) => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textWrapper}>
        <h4 className={styles.textHeader}>{section.projectSectionHeader}</h4>
        <ProjectTextCopy
          sectionText={section.projectSectionText}
        />
      </div>
    </div>
  )
}

type TextProps = {
  sectionText: ProjectSectionText
}

const ProjectTextCopy = ({ sectionText }: TextProps) => {
  switch (sectionText.textType) {
    case "columns" :
      return (
        <div className={styles.columnTextContainer}>
          {sectionText.columnCopy.map((copy, i) => {
            return (
              <h5 className={styles.columnText} key={i}>{copy}</h5>
            )
          })}
        </div>
      )
    case "quote": return (
      <blockquote className={styles.quote}>
        <h5>{sectionText.textCopy}</h5>
      </blockquote>
    )
    case "paragraph": return (<h5>{sectionText.textCopy}</h5>)
    default: return (<h5>{sectionText.textCopy}</h5>)
}
}

// const Foo = ({ section }: TextProps) => {
//   return (
//     <div className={styles.textContainer}>
//       <div className={styles.textWrapper}>
//         <h4 className={styles.textHeader}>{section.projectSectionHeader}</h4>
//         {(section.projectSectionText.columnCopy) &&
//           section.projectSectionText.textType == "columns"
//           ? <div className={styles.columnTextContainer}>
//               {section.projectSectionText.columnCopy.map((copy, i) => {
//                 return (
//                   <h5 className={styles.columnText} key={i}>{copy}</h5>
//                 )
//               })}
//             </div>
//           : <h5>{section.projectSectionText.textCopy}</h5>
//         }
//       </div>
//     </div>
//   )
// }