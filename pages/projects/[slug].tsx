import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Link from 'next/link'
import { concatClassnames } from '@/util/functions'
import { Project } from '@/util/interfaces'
import ProjectNav from "@/components/ProjectNav"
import ProjectSection from "@/components/ProjectSection"
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
          <h2>{project.description}</h2>
          <div className={styles.projectSummary}>
            <h5>{project.summary}</h5>
            <div className={styles.projectDetailsHeadline}>
              <div className={styles.projectDetailsHeadlineContainer}>
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectDetailImagesContainer}>
        {project.sections.map((section, i) => {
          return (
            <ProjectSection
              key={i}
              section={section}
              project={project}
            />
          )
        })
        }
      </div>
      <div className={styles.projectDetailFooterSlide}>
        <div className={styles.projectDetailFooter}>
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