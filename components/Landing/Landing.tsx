import styles from './Landing.module.css'
import Button from '../Button/Button'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.tagline}>
        <div>
          <span className={styles.task}>Manage</span> apps
        </div>
        <span>like a pro</span>
      </div>
      <div className={styles.description}>
        A blazingly fast and efficient package manager
        <span>for windows.</span>
      </div>
      <div className={styles.buttons}>
        <Button text='Get Started' type='secondary' />
        <Button text='Discover Packages' type='primary' />
      </div>
    </div>
  )
}

export default Landing
