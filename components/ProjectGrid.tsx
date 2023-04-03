import ProjectTile from '@/components/ProjectTile'
import styles from '@/styles/ProjectGrid.module.scss'

export default function ProjectGrid() {
  return (
    <div className={styles.projectGrid}>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </div>
  )
}