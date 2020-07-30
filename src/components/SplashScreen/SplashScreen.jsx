import React from 'react'
import styles from './SplashScreen.module.scss'


function SplashScreen() {

  return (
    // <div className={styles.dashboard}>
      <div className={styles.splashScreen}>
        <div className={styles.center}>
          <div className={styles.emoji}>{'🤓'}</div>
          <div className={styles.title}>
            {`Your Messages`}
          </div>
        </div>
      </div>
    // </div>
  )
}

export default SplashScreen

