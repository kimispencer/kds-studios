import { NextPage } from "next";
import { Project } from '@/lib/interfaces';
import { projects }  from './data'
import ProjectGrid from '@/components/ProjectGrid'

// export default function Projects() {
//   return (
//     // <ProjectGrid {...data} />
//     <ProjectGrid />
//   )
// }

// v3 using NextPage and async getInitialProps (which is for pre-fetching data from the server, if we use an external DB)
type ProjectPageProps = {
  projects: Project[]
}

const ProjectsPage: NextPage<ProjectPageProps> = ({ projects }) => {
// note, we don't have to explicity specify the props that this page component will receive from getInitialProps however it is safer
// const ProjectsPage = () => {
  return <ProjectGrid projects={projects} />
}

ProjectsPage.getInitialProps = async () => {
  // const projects: Project[] = [
  //   { name: "John", id: 30 },
  //   { name: "Jane", id: 25 },
  //   { name: "Bob", id: 40 }
  // ];
  projects
  return { projects };
}

export default ProjectsPage

// v2 using NextPage and static JSON data passed down to ProjectGrid
// interface ProjectPageProps {
//   myArray: Project[];
// }

// const ProjectsPage: NextPage<ProjectPageProps> = () => {
//   return <ProjectGrid projects={projects} />
// }
// export default ProjectsPage

// v1 projects page as a const functional component, but because this is a page should we be using NextPage?
// const ProjectsPage = () => {
//   return <ProjectGrid projects={projects} />
// }

// export default ProjectsPage;

