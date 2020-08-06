import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.scss'


function Navigation() {
  return (
    <div className={styles.root}>
      <div className={styles.links}>
        {/* default route - Профиль */}
        <NavLink className={styles.link} to="/profile">
          <span>Профиль</span>
        </NavLink>
        <NavLink className={styles.link} to="/direct">
          <span>Клиенты</span>
        </NavLink>
        <NavLink className={styles.link} to="/comments">
          <span>Комментарии</span>
        </NavLink>
        <NavLink className={styles.link} to="/live">
          <span>Live продажи</span>
        </NavLink>
        {/* <NavLink className={styles.link} to="/shepherd">
          <span>Пастух</span>
        </NavLink> */}
        <NavLink className={styles.link} to="/dashboard">
          <span>Дашборд</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation

