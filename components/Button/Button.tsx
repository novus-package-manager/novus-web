import styles from './Button.module.css'
import Link from 'next/link'

interface ButtonProps {
  text: string
  type?: string
  padding?: number
}

interface ButtonLinkProps {
  text: string
  href: string
  type?: string
  padding?: number
}

export const Button = ({ text, type, padding = 2 }: ButtonProps) => {
  return (
    <div className={type == 'secondary' ? styles.secondary : styles.primary}>
      <div
        style={{
          padding: `0px ${padding}rem`,
        }}
        className={styles.button}
      >
        {text}
      </div>
    </div>
  )
}

export const ButtonLink = ({
  text,
  href,
  type,
  padding = 2,
}: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <div className={type == 'secondary' ? styles.secondary : styles.primary}>
        <div
          style={{
            padding: `0px ${padding}rem`,
          }}
          className={styles.button}
        >
          {text}
        </div>
      </div>
    </Link>
  )
}
