import { useState } from "react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import { Project } from '@/lib/interfaces'
import ProjectNav from "@/components/ProjectNav"
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
      <div className={styles.projectDetailSlide}>
        <h3 className={styles.projectDetailSlideHeader}>{project.title}</h3>
        <h3>{project.description}</h3>
      </div>
    </div>
    <ProjectNav projects={projects} currentSlug={project.slug} />
    </>
  )
}
export default ProjectDetailPage