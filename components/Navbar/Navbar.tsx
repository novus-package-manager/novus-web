import styles from './Navbar.module.css'
import Link from 'next/link'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <>
      <img src='/logo.png' alt='Logo' className={styles.logo} />
      <div className={styles.navbar}>
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
      </div>
      <div className={styles.signup}>
        <Button text='Sign up' type='secondary' padding={2.5} />
      </div>
    </>
  )
}

export default Navbar
