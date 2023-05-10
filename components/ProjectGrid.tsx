import { Project } from '@/lib/interfaces';
import ProjectTile from '@/components/ProjectTile'
import styles from '@/styles/components/ProjectGrid.module.scss'

type ProjectGridProps = {
  projects: Project[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className={styles.projectGrid}>
      {projects.map((p, i) => (
        <div key={i}>
          <ProjectTile
            priority={(i == 0) || (i == 1) ? true : false}
            project={p}
          />
        </div>
      ))}
    </div>
  )
}
export default ProjectGrid