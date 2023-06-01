import LoadingImage from '@/components/LoadingImage'
import Link from 'next/link'
import { Project } from '@/util/interfaces';
import styles from '@/styles/components/ProjectTile.module.scss'

type ProjectTileProps = {
  project: Project
  priority: boolean
}

const ProjectTile = ({ project, priority }: ProjectTileProps) => {
  return (
    <Link
      href="projects/[slug]" as={`/projects/${project.slug}`} className={styles.projectLink }>
      <article className={styles.projectTile}>
        <figure className={styles.figure}>
          <LoadingImage
            priority={priority}
            keyString={project.slug}
            imageKey={project.imageKey}
            fileName={project.indexImage}
            alt={project.title}
            className={styles.projectImage}
          />
          {/* <figcaption>image caption</figcaption> */}
        </figure>
        <div className={styles.projectTileHoverText}>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </article>
      <div className={styles.projectTileTouchscreenText}>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <p>{priority}</p>
      </div>
    </Link>
  )
}

export default ProjectTile