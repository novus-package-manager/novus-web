import { FaBuilding } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Clipboard from '../Clipboard/Clipboard'
import styles from './Package.module.css'

interface PackageProps {
  name: string
  creator: string
  description: string
  package_name: string
  display_name: string
}

const Package = (props: PackageProps) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  const command = 'novus install ' + props.package_name

  return (
    <>
      <img
        src={`/images/packages/${props.package_name}.png`}
        alt='Package Logo'
        className={styles.package_logo}
      />
      <div className={styles.package}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.creator}>
          <FaBuilding />
          <h4>{props.creator}</h4>
        </div>
        <div className={styles.description}>
          <h5>{props.description}</h5>
          <div className={styles.command}>
            <h3>{command}</h3>
            <div className={styles.clipboard}>
              <Clipboard copied={copied} setCopied={setCopied} text={command} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Package
