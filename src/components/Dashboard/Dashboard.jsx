
import React from 'react'
import axios from 'axios'
import Products from '../Products'
import Customers from '../Products'
import Managers from '../Products'
import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={styles.content}>
      <Products />
      <Customers />
      <Managers />
    </div>
  )
}

export default Dashboard
