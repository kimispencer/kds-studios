import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { Project } from '@/lib/interfaces';
import styles from '@/styles/components/ProjectTile.module.scss'

type ProjectTileProps = {
  project: Project
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  return (
    <Link
      href="projects/[slug]" as={`/projects/${project.slug}`} className={styles.projectLink }>
      <article className={styles.projectTile}>
        <figure className={styles.figure}>
          <LazyImage
            keyString={project.slug}
            src={"/images/" + project.imageKey + "/" + project.indexImage} //"https://loremflickr.com/400/400"
            alt={project.title}
            className={styles.projectImage}
          />
          {/* <figcaption>image caption</figcaption> */}
        </figure>
        <div className={styles.projectTileHoverText}>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>
      </article>
      <div className={styles.projectTileTouchscreenText}>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
      </div>
    </Link>
  )
}

export default ProjectTile