import { NextPage } from "next";
import { useRouter } from 'next/router'
import { Project } from '@/lib/interfaces';
import { projects }  from './data'
import { NextPageContext } from 'next';

const ProjectDetailPage = () => {
  const router = useRouter()
  const projectId = router.query.project
  const projectData = projects.find((project) => project.id === Number(projectId))

  return (
    <div>
      <p>project id#{projectId} detail page</p>
      <p>hello, {projectData?.title}</p>
      <p>{projectData?.subtitle}</p>
    </div>
  )
}

export default ProjectDetailPage