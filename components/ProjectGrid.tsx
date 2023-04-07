import { Project } from '@/lib/interfaces';
import ProjectTile from '@/components/ProjectTile'
// import type { ProjectTileData } from '@/components/ProjectTile'
import styles from '@/styles/ProjectGrid.module.scss'

// type ProjectGridProps = {
//   projects: Project[]
// }

// export default function ProjectGrid(projects: ProjectGridProps) {
//   // TODO array from projects/index.tsx is outputting as an object... why???
//   // because: function ProjectGrid(projects: ProjectGridProps), returns object { projects: Project[] }
//   // we need to change this to: ProjectGrid({ projects }: ProjectGridProps), to return the projects array Project[]
//   console.log(projects)
//   return (
//     <div className={styles.projectGrid}>
//       {[].map((project, i) => {
//         return (
//           // need to pass individual data to ProjectTile
//           <div key={i}>
//             <ProjectTile {...project} />
//           </div>
//         )
//       })
//       }
//     </div>
//   )
// }

// v2, ProjectGrid as a const functional component
type ProjectGridProps = {
  projects: Project[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectTile {...project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectGrid

// v1, ProjectGrid is also using NextPage... believe as a low-level component we should just be using a normal functional component?
// interface ProjectGridProps {
//   projects: Project[];
// }

// const ProjectGrid: NextPage<ProjectGridProps> = ({ projects }) => {
//   return (
//     <ul>
//       {projects.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default ProjectGrid;