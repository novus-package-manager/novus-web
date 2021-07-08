import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src='/logo.png' alt='Logo' className={styles.logo} />
      <div></div>
      <div className={styles.links}>
        <Link href='/packages'>
          <h5 className={styles.link}>packages</h5>
        </Link>
        <Link href='/docs'>
          <h5 className={styles.link}>docs</h5>
        </Link>
        <Link href='/contribute'>
          <h5 className={styles.link}>contribute</h5>
        </Link>
      </div>
      <div className={styles.signup}>
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
