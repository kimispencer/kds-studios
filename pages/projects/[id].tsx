import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Project } from '@/lib/interfaces';

type Props = {
  project: Project
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = require('./data.json')
  const paths = projects.map((project: Project) => ({
    params: { id: project.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = require('./data.json')
  const project = projects.find((p: Project) => p.id === Number(params?.id))
  return { props: { project } }
};

const ProjectDetailPage: NextPage<Props> = ({ project }: Props) => {
  return (
    <div>
      <p>hello, {project.title}</p>
    </div>
  )
}
export default ProjectDetailPage