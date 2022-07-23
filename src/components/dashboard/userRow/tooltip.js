import React from 'react'
import styles from './tooltip.module.css'

const tooltip = () => {
  return (
    <div className={styles.container}>
        <div className={styles.arrow} />
        <div className={styles.info}>

        </div>
    </div>
  )
}

export default tooltip