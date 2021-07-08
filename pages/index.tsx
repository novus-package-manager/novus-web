import Head from 'next/head'
import Landing from '../components/Landing/Landing'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Head>
        <title>Novus</title>
        <meta name='description' content='A package manager for windows' />
        <link rel='icon' href='/logo.png' />
        <link
          rel='preload'
          href='/fonts/Roboto-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Landing />
      <Navbar />
    </div>
  )
}
