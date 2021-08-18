import styles from './Navbar.module.css'
import Link from 'next/link'
import { AiFillWindows } from 'react-icons/ai'
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
        <a href='https://github.com/novus-package-manager/novus'>
          <h5 className={styles.link}>contribute</h5>
        </a>
      </div>
      <div className={styles.socials}>
        <a
          className={styles.download}
          href='https://github.com/novus-package-manager/novus/releases/download/v1.0.0/Novus.v1.0.0.Setup.exe'
        >
          <AiFillWindows />
          &nbsp; Download
        </a>
      </div>
    </div>
  )
}

export default Navbar
