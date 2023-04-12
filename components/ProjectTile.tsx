import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/interfaces';
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/ProjectTile.module.scss'

type ProjectTileProps = {
  project: Project
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link
      href="projects/[slug]" as={`/projects/${project.slug}`} className={styles.projectLink }>
      <article className={styles.projectTile}>
        <figure className={styles.figure}>
          <Image
            alt=""
            src="https://loremflickr.com/400/400"
            fill
            // placeholder="blur"
            className={concatClassnames(
              styles.projectImage,
              isLoading
                ? styles.loading
                : styles.loaded
            )}
            onLoadingComplete={() => setLoading(false)}
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