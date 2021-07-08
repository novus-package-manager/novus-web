import styles from './Button.module.css'

interface ButtonProps {
  text: string
  type?: string
  padding?: number
}

const Button = ({ text, type, padding = 2 }: ButtonProps) => {
  return (
    <div
      style={{
        backgroundColor:
          type == 'secondary' ? 'var(--secondary)' : 'var(--primary)',
        padding: `0px ${padding}rem`,
      }}
      className={styles.button}
    >
      {text}
    </div>
  )
}

export default Button
