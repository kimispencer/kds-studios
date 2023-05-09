import { Service, Tool } from '@/lib/interfaces';
import styles from '@/styles/pages/Services.module.scss'

const services: Service[] =
  [
    { title: "Product Design"
    , description: "Designing creative & appealing products, from ideation all the way to launch. From rapidly prototyped design explorations to pixel perfect products."
    },
    { title: "UI/UX Design"
    , description: "Creating design prototypes, high fidelity mockups & wireframes and user journey maps; with a focus on designing modular reusable UI component libraries and design systems."
    },
    { title: "Development"
    , description: "Specializing in front-end web development & engineering solutions; with over 10 years experience in building responsive sites from e-commerce to high data density dashboards."
    },
    { title: "Visual Design"
    , description: "Creating design systems and visual libraries to establish a brand voice and maintain cohesiveness across various digital user experiences."
    },
    { title: "UX Strategy"
    , description: "Conducting user research, A/B testing and analysis to understand user behaviors and best serve their needs in the digital experience."
    },
    { title: "Content Strategy"
    , description: "Helping brands plan, create and develop content to promote their online experiences and products."
    }
  ]

const tools: Tool[] =
  [ { title: "Design tools"
    , description:
        [ "Figma"
        , "Sketch"
        , "Adobe Illustrator"
        , "Adobe Photoshop"
        , "Adobe InDesign"
        ]
    },
    { title: "Software languages"
    , description:
        [ "React"
        , "TypeScript & JavaScript"
        , "NextJS"
        , "HTML/CSS/SASS/LESS"
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

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.servicesAboveFold}>
        <h2 className={styles.servicesHeader}>Services</h2>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, i) => {
            return (
              <div className={styles.serviceBlock} key={i}>
                <h4 className={styles.serviceTile}>{service.title}</h4>
                <h5>{service.description}</h5>
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
export default Services