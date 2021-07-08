import styles from './Card.module.css'

interface CardProps {
  title: string
  description: string
  imgWidth?: string
}

const Card = ({ title, description, imgWidth = '37rem' }: CardProps) => {
  return (
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
  )
}

export default Card
