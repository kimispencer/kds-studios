import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Link from 'next/link'
import { concatClassnames } from '@/util/functions'
import { Project } from '@/util/interfaces'
import ProjectNav from "@/components/ProjectNav"
import DeviceFrame from "@/components/DeviceFrame"
import ScreenshotImage from "@/components/ScreenshotImage"
import styles from '@/styles/pages/Projects.module.scss'

type Props = {
  project: Project
  projects: Project[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = require('./data.json')
  const paths = projects.map((project: Project) => ({
    params: { slug: project.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = require('./data.json')
  const project = projects.find((p: Project) => p.slug === params?.slug)
  return { props: { project, projects } }
}

const ProjectDetailPage: NextPage<Props> = ({ project, projects }: Props) => {
  return (
    <>
    <div className={styles.projectDetailPage}>
      <div className={styles.projectDetailAboveFold}>
        <div className={styles.projectDetailAboveFoldContent}>
          <h2 className={styles.projectDetailAboveFoldHeader}>{project.title}</h2>
          <h2>{project.description}</h2>
        </div>
      </div>
      <div className={styles.projectDetailImagesContainer}>
        {project.images.map((image, i) => {
          return (
            image.imageType === "desktop" || image.imageType === "iphone"
            ? <div
                key={project.slug + "-" + i}
                className={concatClassnames(
                  styles.projectDetailImageSlide,
                  image.imageType === "desktop" ? styles.desktop : styles.iphone
                )}
              >
                <DeviceFrame
                  priority={i == 0 ? true : false}
                  image={image}
                  imageKey={project.imageKey}
                  backgroundColor={project.backgroundColor}
                  fullscreen={project.fullscreen}
                />
                <div className={styles.deviceImageTextContainer}>
                  <h5 className={styles.deviceImageText}>{image.imageText}</h5>
                </div>
              </div>
            : <div
                key={project.slug + "-" + i}
                className={concatClassnames(styles.projectDetailImageSlide, styles.screenshot)}
              >
                <ScreenshotImage
                  priority={i == 0 ? true : false}
                  image={image}
                  imageKey={project.imageKey}
                  backgroundColor={project.backgroundColor}
                  fullscreen={project.fullscreen}
                />
                <div className={styles.screenshotImageTextContainer}>
                  <h5 className={styles.screenshotImageText}>{image.imageText}</h5>
                </div>
              </div>
          )
        })
        }
      </div>
      <div className={styles.projectDetailSummarySlide}>
        <div className={styles.projectDetailSummary}>
          <div className={styles.projectDetailSummaryDescription}>
            <h5>{project.summary}</h5>
            {(project.siteUrl || project.supplementalUrl) &&
              <div className={styles.projectLinksContainer}>
                {project.siteUrl &&
                  <Link href={project.siteUrl} target="_blank">
                    <h4 className={styles.projectDetailLink}>Visit the site</h4>
                  </Link>
                }
                {project.supplementalUrl &&
                  <Link href={project.supplementalUrl.path} target="_blank">
                    <h4 className={styles.projectDetailLink}>{project.supplementalUrl.name}</h4>
                  </Link>
                }
              </div>
            }
          </div>
          <div className={styles.projectSkills}>
            {project.skills.map((skill, i) => {
              return (
                <h4 key={i}>{skill}</h4>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
    <ProjectNav projects={projects} currentSlug={project.slug} />
    </>
  )
}
export default ProjectDetailPage