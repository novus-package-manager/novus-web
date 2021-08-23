import styles from './Landing.module.css'
import { ButtonLink, Button } from '../Button/Button'
import Card from './Card/Card'
import TextLoop from 'react-text-loop'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillWindows } from 'react-icons/ai'
const Landing = () => {
  const adjectives = ['Install', 'Uninstall', 'Update', 'Manage']

  return (
    <div className={styles.screen}>
      <div className={styles.landing}>
        <motion.div
          className={styles.tagline}
          initial={{ marginLeft: 480 }}
          animate={{ translateX: -240 }}
          transition={{
            duration: 0.4,
          }}
        >
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
        </motion.div>
        <motion.div
          className={styles.description}
          initial={{ marginLeft: -480 }}
          animate={{ translateX: +240 }}
          transition={{
            duration: 0.4,
          }}
        >
          A blazingly fast and futuristic package manager for windows.
        </motion.div>
        <motion.div
          className={styles.buttons}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
          }}
        >
          <a href='https://docs.novuspkg.com/docs/intro'>
            <Button text='Get Started' type='secondary' />
          </a>
          <ButtonLink
            text='Discover Packages'
            href='/packages'
            type='primary'
          />
        </motion.div>
      </div>
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
      <div className={styles.footer}>
        <Link href='/'>
          <img src='/logo.png' alt='Logo' className={styles.logo} />
        </Link>
        <div className={styles.social}>
          <a href='https://github.com/novus-package-manager'>
            <img src='/links/github.svg' alt='Github' />
          </a>
          <a href='https://twitter.com/ZaphodElevated'>
            <img src='/links/twitter.svg' alt='Twitter' />
          </a>
          <a href='https://discord.gg/AAZpP8HzZF'>
            <img src='/links/discord.svg' alt='Discord' />
          </a>
        </div>
        {/* <div className={styles.footerDownload}>
          <AiFillWindows />
          <a className={styles.download} href="https://github.com/novus-package-manager/novus/releases/download/v1.0.0/Novus.v1.0.0.Setup.exe"> Download for windows</a>
        </div> */}
        <a
          href='https://www.producthunt.com/posts/novus-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-novus-2'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308940&theme=dark'
            alt='Novus - A blazingly fast open-source package manager for windows. | Product Hunt'
            style={{ width: '250px', height: '54px' }}
            width='250'
            height='54'
          />
        </a>
      </div>
    </div>
  )
}

export default Landing
