

import React from 'react'
import Profile from './Profile'
import styles from './ClientDashboard.module.scss'

function ClientDashboard() {

  return (
    <div className={styles.root}>
      <div className={styles.dashboard}>
        <Profile />
        <Profile />
  

        
        
      </div>
    </div>

  )
}

export default ClientDashboard