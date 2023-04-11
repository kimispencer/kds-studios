import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from "react";
import { Project } from '@/lib/interfaces';

const ProjectNav = () => {
  const router = useRouter()
  const currentSlug = router.query.slug as string
  const [projects, setProjects] = useState<Project[]>([])
  const [currentProject, setCurrentProject] = useState<Project | undefined>()
  const [previousProject, setPreviousProject] = useState<Project | null>(null)
  const [nextProject, setNextProject] = useState<Project | null>(null)

  return (
    <></>
  )
}
export default ProjectNav