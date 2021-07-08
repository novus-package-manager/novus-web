import styles from './Card.module.css'

interface CardProps {
  title: string
  description: string
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h2 className={styles.title}>{props.title}</h2>
        <h5 className={styles.description}>{props.description}</h5>
      </div>
      <img
        className={styles.image}
        src={`/images/${props.title}.png`}
        alt={props.title}
      />
    </div>
  )
}

export default Card
