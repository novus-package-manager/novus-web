import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type?: string;
  padding?: number;
}

const Button = ({ text, type, padding = 2 }: ButtonProps) => {
  return (
    <div className={type == "secondary" ? styles.secondary : styles.primary}>
      <div
        style={{
          padding: `0px ${padding}rem`,
        }}
        className={styles.button}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
