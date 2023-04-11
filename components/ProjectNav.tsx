import Link from 'next/link'
import { Project } from '@/lib/interfaces'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/ProjectNav.module.scss'

type Props = {
  projects: Project[]
  currentSlug: string
}

const ProjectNav = ({ projects, currentSlug }: Props) => {
  // set active tab
  projects.forEach((tab) => {
    tab.active = currentSlug === tab.slug
  })

  return (
    <nav className={styles.projectNav}>
      <Link href="/projects" className={styles.projectNavLink}>All</Link>
      {projects.map((tab) => (
        <Link
          key={tab.id}
          href={`/projects/${tab.id}`}
          className={concatClassnames(
            styles.projectNavLink,
            tab.active ? styles.active : ""
          )}
        >
          {tab.title}
        </Link>
      ))}
    </nav>
  )
}
export default ProjectNav