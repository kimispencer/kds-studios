import { useRouter } from 'next/router'

export default function Project(name: string) {
  const router = useRouter()
  const {project} = router.query

  return (
    <>
      <p>project {project} detail page</p>
    </>
  )
}