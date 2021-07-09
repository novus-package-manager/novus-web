import styles from "./Card.module.css";
import Fade from "react-reveal/Fade";

interface CardProps {
  title: string;
  description: string;
  imgWidth?: string;
  left: boolean;
}

const Card = ({ title, description, imgWidth = "37rem", left }: CardProps) => {
  if (left) {
    return (
      <Fade right collapse>
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
      </Fade>
    );
  } else {
    return (
      <Fade left collapse>
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
      </Fade>
    );
  }
};

export default Card;
