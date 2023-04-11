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
      href="projects/[id]" as={`/projects/${project.id}`} className={styles.projectLink }>
      <article className={styles.projectTile}>
        <figure className={styles.figure}>
          <Image
            alt=""
            src="https://loremflickr.com/400/400"
            fill
            // placeholder="blur"
            className={concatClassnames(
              styles.image,
              isLoading
                ? styles.loading
                : styles.loaded
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          {/* <figcaption>image caption</figcaption> */}
        </figure>
        <div className={styles.projectTileText}>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>
      </article>
    </Link>
  )
}

export default ProjectTile