import { Service } from '@/lib/interfaces';
import styles from '@/styles/pages/Services.module.scss'

const services: Service[] =
  [
    { title: "Product Design"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { title: "UI/UX Design"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { title: "Development"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { title: "Content Strategy"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { title: "UX Strategy"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { title: "Visual Design"
    , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
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
                <h4>{service.description}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Services