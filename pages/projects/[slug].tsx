import { useState } from "react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
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
      <div className={styles.projectDetailImages}>
        {project.images.map((image, i) => {
          switch (image.imageType) {
            case "desktop":
              console.log("desktop")
              break
            case "iphone":
              console.log("iphone")
              break
            default:
              console.log("no match")
          }
          return (
            <div key={i} className={styles.projectDetailImageSlide}>
              <div className={styles.projectDetailImageSlideInnerImage}>
                <DeviceFrame />
              </div>
              <div className={styles.projectDetailImageSlideInnerText}>
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