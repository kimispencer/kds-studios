import { NextPage, GetStaticProps } from "next";
import { Project } from '@/lib/interfaces';
import ProjectGrid from '@/components/ProjectGrid'

// v3 using NextPage and async fetch data and pass as props
type ProjectPageProps = {
  projects: Project[]
}

const ProjectsPage: NextPage<ProjectPageProps> = ({ projects }) => {
  return <ProjectGrid projects={projects} />
}
export default ProjectsPage

/*
getInitialProps is executed on the client-side, which means that it can only be used for dynamic rendering.
This can result in slower performance, as the client has to wait for the data to be fetched before rendering the page.
*/
// ProjectsPage.getInitialProps = async () => {
//   // const data: Project[] = [
//   //   { name: "John", id: 30 },
//   //   { name: "Jane", id: 25 },
//   //   { name: "Bob", id: 40 }
//   // ];
//   data
//   return { projects: data };
// }

/*
getStaticProps is executed at build time, which means that the data is pre-rendered and delivered to the client as static HTML,
resulting in faster performance.
*/
export const getStaticProps = async () => {
  // const res = await fetch(`http://localhost:3000/pages/projects/data.json`);
  // const projects = await res.json();
  const projects = require('./data.json')

  return { props: { projects }}

  // return { props: { projects: data } }
};

// v2 using NextPage and static JSON data passed down to ProjectGrid
// interface ProjectPageProps {
//   myArray: Project[];
// }

// const ProjectsPage: NextPage<ProjectPageProps> = () => {
//   return <ProjectGrid projects={data} />
// }
// export default ProjectsPage

// v1 projects page as a const functional component and static JSON data passed down to ProjectGrid
// but because this is a page should we be using NextPage?
// const ProjectsPage = () => {
//   return <ProjectGrid projects={data} />
// }

// export default ProjectsPage;

