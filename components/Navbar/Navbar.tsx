import styles from './Navbar.module.css'
import Link from 'next/link'

interface NavbarProps {
  fixed?: boolean
  page: string
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <img
          src='/logo.png'
          alt='Logo'
          className={styles.logo}
          style={{
            position: props.fixed ? 'fixed' : 'absolute',
            marginTop: props.fixed ? '0.5rem' : '-0.5rem',
          }}
        />
      </Link>
      <div className={styles.links}>
        <Link href='/packages'>
          <h5 className={styles.link}>packages</h5>
        </Link>
        <a href='https://docs.novuspkg.com/docs/intro'>
          <h5 className={styles.link}>docs</h5>
        </a>
        <Link href='/'>
          <h5 className={styles.link}>contribute</h5>
        </Link>
      </div>
      <div className={styles.socials}>
        <a href='https://github.com/novus-package-manager'>
          <img src='/links/github.svg' alt='Github' />
        </a>
        <a href='https://twitter.com/ZaphodElevated'>
          <img src='/links/twitter.svg' alt='Twitter' />
        </a>
        <a href='https://discord.gg/5m7sKh4X'>
          <img src='/links/discord.svg' alt='Discord' />
        </a>
      </div>
    </div>
  )
}

export default Navbar
