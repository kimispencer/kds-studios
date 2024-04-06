import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Link from 'next/link'
import { concatClassnames } from '@/util/functions'
import { Project } from '@/util/interfaces'
import ProjectNav from "@/components/ProjectNav"
import ProjectDetailSection from "@/components/ProjectDetailSection"
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
                <div className={styles.projectHeadlineColumn}>
                  <p className={styles.projectHeadlineTitle}>Skills:</p>
                  {project.skills.map((skill, i) => {
                    return (<p key={i} className={styles.projectHeadlineText}>{skill}</p>)
                    })
                  }
                </div>
                <div className={styles.projectHeadlineColumn}>
                  <p className={styles.projectHeadlineTitle}>Product:</p>
                  {project.productType.map((p, i) => {
                    return (<p key={i} className={styles.projectHeadlineText}>{p}</p>)
                    })
                  }
                </div>
                <div className={styles.projectHeadlineColumn}>
                  <p className={styles.projectHeadlineTitle}>Industry:</p>
                  {project.industry.map((industry, i) => {
                    return (<p key={i} className={styles.projectHeadlineText}>{industry}</p>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {project.sections.map((section, i) => {
        return (
            <ProjectDetailSection
              key={i}
              section={section}
              project={project}
            />
          )
        })
      }
      <div className={styles.projectDetailFooterSection}>
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
              return (<h4 key={i}>{skill}</h4>)
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