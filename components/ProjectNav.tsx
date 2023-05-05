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
      <Link href="/projects" className={styles.projectNavLink}><h5>All</h5></Link>
      {projects.map((tab) => (
        <Link
          key={tab.id}
          href={`/projects/${tab.slug}`}
          className={concatClassnames(
            styles.projectNavLink,
            tab.active ? styles.active : ""
          )}
        >
          <h5>{tab.title}</h5>
        </Link>
      ))}
    </nav>
  )
}
export default ProjectNav