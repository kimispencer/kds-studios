import { Skill, Tool } from '@/util/interfaces';
import styles from '@/styles/pages/Skills.module.scss'

const skills: Skill[] =
  [
    { title: "Product Design"
    , description: "Designing creative & appealing products, from ideation all the way to launch. From rapidly prototyped design explorations to pixel perfect products."
    },
    { title: "UI/UX Design"
    , description: "Creating design prototypes, high fidelity mockups & wireframes, and user journey maps; with a focus on designing modular reusable UI component libraries and design systems."
    },
    { title: "Development"
    , description: "Specializing in front-end web development & engineering solutions; with over 10 years experience in building responsive sites from e-commerce to high density data dashboards."
    },
    { title: "Visual Design"
    , description: "Creating design systems & visual libraries to establish a brand voice and maintain cohesiveness across various digital user experiences."
    },
    { title: "UX Research"
    , description: "Conducting user research, A/B testing and analysis to understand user behaviors and best serve their needs in the digital product experience."
    },
    { title: "Design Strategy"
    , description: "Helping brands plan, create and strategize design priorities to promote their digital experiences and products."
    }
  ]

const tools: Tool[] =
  [ { title: "Design tools"
    , description:
        [ "Figma & Sketch"
        , "Adobe Illustrator"
        , "Adobe Photoshop"
        , "Adobe InDesign"
        , "Rhino 3D "
        ]
    },
    { title: "Software languages"
    , description:
        [ "TypeScript & JavaScript"
        , "HTML & CSS/SASS/LESS"
        , "React"
        , "NextJS"
        , "Git"
        ]
    },
    { title: "Technical tools"
    , description:
        [ "Visual Studio Code"
        , "GitHub & GitLab"
        , "Linear"
        , "Slack"
        ]
    }
  ]

const Skills = () => {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsAboveFold}>
        <h2 className={styles.skillsHeader}>Skills</h2>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, i) => {
            return (
              <div className={styles.serviceBlock} key={i}>
                <h4 className={styles.serviceTile}>{skill.title}</h4>
                <h5>{skill.description}</h5>
              </div>
            )
          })
        }
        {tools.map((tool, i) => {
          return (
            <div className={styles.serviceBlock} key={i}>
              <h4 className={styles.serviceTile}>{tool.title}</h4>
              <ul>
                {tool.description.map((t, i) => {
                  return (
                    <li key={i}>
                      <h5>{t}</h5>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
export default Skills