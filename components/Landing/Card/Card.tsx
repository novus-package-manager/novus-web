import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Card.module.css'
interface CardProps {
  title: string
  description: string
  imgWidth?: string
  left: boolean
}

function FadeInWhenVisible({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

const Card = ({ title, description, imgWidth = '37rem', left }: CardProps) => {
  if (left) {
    return (
      <FadeInWhenVisible>
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            <h5 className={styles.description}>{description}</h5>
          </div>
          <img
            className={styles.image}
            src={`/images/${title}.png`}
            style={{ width: imgWidth }}
            alt={title}
          />
        </div>
      </FadeInWhenVisible>
    )
  } else {
    return (
      <FadeInWhenVisible>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={`/images/${title}.png`}
            style={{ width: imgWidth }}
            alt={title}
          />
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            <h5 className={styles.description}>{description}</h5>
          </div>
        </div>
      </FadeInWhenVisible>
    )
  }
}

export default Card
