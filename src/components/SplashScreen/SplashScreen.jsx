import React, { useEffect, useState } from 'react'
import Chat from '../Chat'
import styles from './SplashScreen.module.scss'


function SplashScreen() {

  return (
    <div className={styles.root}>
      <div className={styles.center}>
        <div className={styles.emoji}>{ '🤓' }</div>
        <div className={styles.title}>
          { `Your Messages` }
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

