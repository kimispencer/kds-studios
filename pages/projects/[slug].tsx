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

// @TODO add lazy loading
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
                  image={image}
                  imageKey={project.imageKey}
                  backgroundColor={project.backgroundColor}
                  fullscreen={project.fullscreen}
                />
                <div className={styles.deviceImageText}>
                  <h4>{image.imageText}</h4>
                </div>
              </div>
            : <div
                key={project.slug + "-" + i}
                className={concatClassnames(styles.projectDetailImageSlide, styles.screenshot)}
              >
                <ScreenshotImage
                  image={image}
                  imageKey={project.imageKey}
                  backgroundColor={project.backgroundColor}
                  fullscreen={project.fullscreen}
                />
              </div>
          )
        })
        }
      </div>
      <div className={styles.projectDetailSummarySlide}>
        <div className={styles.projectDetailSummary}>
          <div className={styles.projectDetailSummaryDescription}>
            <p>Dignissim suspendisse in est ante in nibh mauris cursus mattis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Leo a diam sollicitudin tempor id eu nisl. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Adipiscing diam donec adipiscing tristique. Ultrices tincidunt arcu non sodales. Amet purus gravida quis blandit turpis cursus. In hac habitasse platea dictumst. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Nisi est sit amet facilisis magna etiam tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.</p>
            <h4 className={styles.projectDetailLink}>Visit the site</h4>
          </div>
          <div className={styles.projectSkills}>
            <h4>Creative Direction</h4>
            <h4>Design</h4>
            <h4>Development</h4>
          </div>
        </div>
      </div>
    </div>
    <ProjectNav projects={projects} currentSlug={project.slug} />
    </>
  )
}
export default ProjectDetailPage