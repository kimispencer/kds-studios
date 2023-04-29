import { useState } from "react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import concatClassnames from '@/lib/functions'
import { Project } from '@/lib/interfaces'
import ProjectNav from "@/components/ProjectNav"
import DeviceFrame from "@/components/DeviceFrame"
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
          // let isDesktop: boolean;
          // switch (image.imageType) {
          //   case "desktop":
          //     isDesktop = true
          //     break
          //   case "iphone":
          //     isDesktop = false
          //     break
          //   default:
          //     isDesktop = true
          //     break
          // }
          return (
            <div
              key={i}
              className={concatClassnames(
                styles.projectDetailSlide,
                image.isDesktop ? styles.desktop : styles.iphone
              )}
            >
              <div className={styles.projectDetailSlideImage}>
                <DeviceFrame isDesktop={image.isDesktop} />
              </div>
              <div className={styles.projectDetailSlideText}>
                <h4>{image.imageText}</h4>
              </div>
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