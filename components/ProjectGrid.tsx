import ProjectTile from '@/components/ProjectTile'
import type { ProjectTileData } from '@/components/ProjectTile'
import styles from '@/styles/ProjectGrid.module.scss'

// TODO this should come from our data file (projects.json)
const PROJECT_ITEMS =
  [
    { title: "Smarty"
    , subtitle: "Lorem ipsum"
    , slug: "projects/smarty"
    },
    { title: "Lumi"
    , subtitle: "Lorem ipsum"
    , slug: "projects/lumi"
    },
    { title: "The Arrivals"
    , subtitle: "Lorem ipsum"
    , slug: "projects/the-arrivals"
    },
    { title: "Suited"
    , subtitle: "Lorem ipsum"
    , slug: "projects/suited"
    },
    { title: "Onomie"
    , subtitle: "Lorem ipsum"
    , slug: "projects/onomie"
    },
  ]

export default function ProjectGrid() {
  return (
    <div className={styles.projectGrid}>
      {PROJECT_ITEMS.map((project, i) => {
        return (
          <ProjectTile key={i} {...project} />
        )
      })
      }
    </div>
  )
}


// export default function ProjectGrid(projects: ProjectTileData[]) {
//   // TODO array from projects/index.tsx is outputting as an object... why???
//   console.log(projects)
//   return (
//     <div className={styles.projectGrid}>
//       {[].map((project: ProjectTileData, i) => {
//         return (
//           // need to pass individual data to ProjectTile
//           <ProjectTile key={i} {...project} />
//         )
//       })
//       }
//     </div>
//   )
// }