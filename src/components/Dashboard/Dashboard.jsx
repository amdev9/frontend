
import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Products from '../Products'
import Customers from '../Products'
import Managers from '../Products'
import styles from './Dashboard.module.scss'

function Dashboard() {

  const renderNavigation = () => {
    return (
      <div className={styles.navigation}>
        <div className={styles.links}>
          <NavLink activeClassName={styles.active} to="/dashboard/admins">
            {`💪`} <span>Админы</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/traits">
            {`🤯 `} <span>Трейты</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/tasks">
            {`📋 `} <span>Задачи</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/calls">
            {`🤙`} <span>Звонки</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/controls">
            {`🎛️`} <span>Щитовая</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/operational">
            {`👩‍🏫`} <span>Операционка</span>
          </NavLink>
        </div>
      </div>
    )
  }
  
  return (
    <div className={styles.content}>
      {renderNavigation()}
      <Products />
      <Customers />
      <Managers />
    </div>
  )
}

export default Dashboard
