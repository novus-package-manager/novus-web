import styles from './Landing.module.css'
import Button from '../Button/Button'
import Card from './Card/Card'
import TextLoop from 'react-text-loop'
import { motion } from "framer-motion"
const Landing = () => {
  const adjectives = ['Install', 'Uninstall', 'Update', 'Manage']

  return (
    <div className={styles.screen}>
      <motion.div className={styles.landing}
        style={{ marginLeft: 240 }}
        animate={{
          translateX: -240,
        }}
      >
        <div className={styles.tagline}>
          <div>
            <TextLoop interval={2000}>
              {adjectives.map((word, index) => (
                <span key={index} className={styles.task}>
                  {word}
                </span>
              ))}
            </TextLoop>{' '}
            apps
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
      </motion.div>
      <Card
        title='Swift'
        description='Unlike any other package manager, Novus uses multithreaded downloads making the download speeds 8 times faster.'
        imgWidth='30rem'
        left={false}
      />
      <Card
        title='Efficient'
        description='Apart from being extremely fast, Novus also installs and uninstalls packages concurrently, making it as efficient as possible.'
        left={true}
      />
      <Card
        title='Authentic'
        description='Not only are all of Novus’s packages are monitored regularly, but all of them are always up to date and trusted by the community.'
        left={false}
      />
    </div >
  )
}

export default Landing
