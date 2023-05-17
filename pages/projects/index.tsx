import { NextPage, GetStaticProps } from "next"
import { Project } from '@/util/interfaces'
import ProjectGrid from '@/components/ProjectGrid'

type ProjectPageProps = {
  projects: Project[]
}

export const getStaticProps:GetStaticProps<ProjectPageProps> = async () => {
  const projects = require('./data.json')
  return { props: { projects }}
}

const ProjectsPage: NextPage<ProjectPageProps> = ({ projects }) => {
  return <ProjectGrid projects={projects} />
}
export default ProjectsPage

