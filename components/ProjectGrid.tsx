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
          <ProjectTile project={p} />
        </div>
      ))}
    </div>
  )
}
export default ProjectGrid