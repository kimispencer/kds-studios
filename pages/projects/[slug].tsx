import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import concatClassnames from '@/lib/functions'
import { Project } from '@/lib/interfaces'
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
          <h3 className={styles.projectDetailAboveFoldHeader}>{project.title}</h3>
          <h3>{project.description}</h3>
        </div>
      </div>
      <div>
        {project.images.map((image, i) => {
          return (
            image.imageType === "desktop" || image.imageType === "iphone"
            ? <div
                key={i}
                className={concatClassnames(
                  styles.projectDetailSlide,
                  image.imageType === "desktop" ? styles.desktop : styles.iphone
                )}
              >
                <DeviceFrame image={image} imageKey={project.imageKey} />
                <div className={styles.deviceImageText}>
                  <h4>{image.imageText}</h4>
                </div>
              </div>
            : <div key={i} className={concatClassnames(styles.projectDetailSlide, styles.screenshot)}>
                <ScreenshotImage image={image} imageKey={project.imageKey} backgroundColor={project.backgroundColor} />
              </div>
          )
        })
        }
      </div>
    </div>
    <ProjectNav projects={projects} currentSlug={project.slug} />
    </>
  )
}
export default ProjectDetailPage