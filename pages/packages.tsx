import Navbar from '../components/Navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import Package from '../components/Package/Package'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Packages.module.css'

const instance = axios.create({
  baseURL: 'https://storage.googleapis.com/novus_bucket',
  timeout: 1000,
  headers: {},
})
const fetcher = (url: string) => instance.get(url).then((res) => res.data)

function Page({ pkgName }) {
  // console.log('name: ', pkgName)

  const { data, error } = useSWR(
    `/${pkgName}.json?a=${Math.round(Date.now() / 1000)}`,
    fetcher
  )

  if (error) console.log('error: ', error)

  // if (!data) console.log('loading ..')

  let pkg = data

  if (data !== undefined) {
    pkg = data
  }

  // console.log('alias: ', pkg.alias)

  if (pkg !== undefined) {
    return (
      <motion.div
        initial={{ translateY: 30 }}
        animate={{ translateY: 0 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        className={styles.package_card}
      >
        <Package
          key={pkg.package_name}
          name={
            pkg.display_name
              ? pkg.alias
                ? pkg.alias
                : pkg.display_name
              : 'loading'
          }
          creator={pkg.creator ? pkg.creator : 'loading'}
          description={pkg.description ? pkg.description : 'loading'}
          package_name={pkg.package_name ? pkg.package_name : 'loading'}
          display_name={pkg.display_name ? pkg.display_name : 'loading'}
        />
      </motion.div>
    )
  }
  return <div></div>
}

const Packages = ({ package_list }) => {
  const { query } = useRouter()

  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  package_list = package_list
    .sort()
    .filter((txt: string) => txt.indexOf(searchQuery) !== -1)

  const pages_num = Math.ceil(package_list.length / 15)

  let _page = undefined
  if (query.page !== undefined) {
    if (parseInt(query.page as string) > pages_num) {
      _page = pages_num
    } else if (parseInt(query.page as string) < 1) {
      _page = 1
    } else {
      _page = parseInt(query.page as string)
    }
  } else {
    _page = 1
  }

  // console.log('page: ', _page)

  if (page != _page) {
    setPage(_page)
  }

  const loaded = page * 15

  const pages = []

  for (let i = loaded - 15; i < loaded; i++) {
    const pkgName = package_list[i]

    pages.push(<Page key={i} pkgName={pkgName} />)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/scripts/search.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div className={styles.packages_screen}>
        <Navbar page='packages' />
        <div className={styles.header}>
          <h1>Discover Trusted</h1>
          <h1>Community Packages</h1>
          <h2 className={styles.description_1}>
            Find thousands of community packages and install them with
          </h2>
          <h2 className={styles.description_2}>just a single command.</h2>
        </div>
        <div className={styles.searchbar}>
          <FaSearch className={styles.searchicon} />
          <input
            type='text'
            id='search_bar'
            name='search bar'
            placeholder='Search Packages'
            onChange={() =>
              setSearchQuery(
                (document.getElementById('search_bar') as HTMLInputElement)
                  .value
              )
            }
            className={styles.searchinput}
          />
        </div>
        {pages}
        <div className={styles.pagination}>
          <Link href={`/packages?page=${page - 1}`}>
            <div className={styles.prev}>
              <MdKeyboardArrowLeft className={styles.icon} />
              <p>Prev</p>
            </div>
          </Link>
          <div className={styles.page}>
            <p>{page}</p>
          </div>
          <Link href={`/packages?page=${page + 1}`}>
            <div className={styles.page}>
              <p>{page + 1}</p>
            </div>
          </Link>
          <Link href={`/packages?page=${page + 2}`}>
            <div className={styles.page}>
              <p>{page + 2}</p>
            </div>
          </Link>
          <Link href={`/packages?page=${page + 3}`}>
            <div className={styles.page}>
              <p>{page + 3}</p>
            </div>
          </Link>
          <Link href={`/packages?page=${page + 1}`}>
            <div className={styles.next}>
              <p>Next</p>
              <MdKeyboardArrowRight className={styles.icon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const packagelist_res = await fetch(
    `https://storage.googleapis.com/novus_bucket/package-list/package-list.json?a=${Math.round(
      Date.now() / 1000
    )}`
  )
  const package_arr = await packagelist_res.json()

  let package_list: string[] = package_arr.packages

  return {
    props: { package_list },
  }
}

export default Packages
