import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Novus</title>
        <meta name='description' content='A package manager for windows' />
        <link rel='icon' href='/logo.png' />
      </Head>
    </div>
  )
}
