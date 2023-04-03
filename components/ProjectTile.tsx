import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/ProjectTile.module.scss'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProjectTile() {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href="#" className={styles.projectLink}>
      <article className={styles.projectTile}>
        <figure className={styles.figure}>
          <Image
            alt=""
            src="https://loremflickr.com/320/240"
            fill
            // placeholder="blur"
            className={cn(
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
          <h2>project title</h2>
          <p>project subtitle</p>
        </div>
      </article>
    </Link>
  )
}