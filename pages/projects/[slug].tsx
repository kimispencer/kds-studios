import { useState } from "react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import { Project } from '@/lib/interfaces'
import ProjectNav from "@/components/ProjectNav"

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
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
      <ProjectNav projects={projects} currentSlug={project.slug} />
    </div>
  )
}
export default ProjectDetailPage