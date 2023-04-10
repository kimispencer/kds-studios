import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router'
import { Project } from '@/lib/interfaces';
import { NextPageContext } from 'next';

// v2 with getStaticPaths and getStaticProps
/*
The functions getStaticPaths and getStaticProps runs on compile time, i.e. when you run the command next build.
This generates the HTML once, and no JS runs when someone visits your site to look at a project. The page will look the same for everyone.
*/
type Props = {
  project: Project;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(`${process.env.BASE_URL}/projects.json`)
  // const projects = await res.json()
  const projects = require('./data.json')

  const paths = projects.map((project: Project) => ({
    // note this needs to match the dynamic path file name
    // e.g. /projects/[id].tsx should use params { id : project.id }
    params: { id: project.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // const res = await fetch(`${process.env.BASE_URL}/projects.json`)
  // const projects = await res.json()
  const projects = require('./data.json')

  const project = projects.find((p: Project) => p.id === Number(params?.id))

  return { props: { project } }
};

function ProjectDetailPage({ project }: Props) {
  // Render the Project detail page
  return (
    <div>
      <p>hello, {project.title}</p>
    </div>
  )
}
export default ProjectDetailPage;

// v1 with useRouter
/*
The code with useRouter and useEffect, however, fetches the data on page load.
When someone visits your site their browser fetches the data, and then runs some JS to display the data to them.
*/
// const ProjectDetailPage = () => {
//   const router = useRouter()
//   const projectId = router.query.project
//   const projectData = data.find((project) => project.id === Number(projectId))

//   return (
//     <div>
//       <p>project id#{projectId} detail page</p>
//       <p>hello, {projectData?.title}</p>
//       <p>{projectData?.subtitle}</p>
//     </div>
//   )
// }
// export default ProjectDetailPage