import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.scss'


function Navigation() {

  // // <div className={styles.root}>
  return (
    <header className={styles.root}>
      <div className={styles.links}>
        {/* default route - Профиль */}
        <NavLink className={styles.link} activeClassName={ styles.active } to="/profile">
          <span>Профиль</span>
        </NavLink>
        <NavLink className={styles.link} activeClassName={ styles.active } to="/direct">
          <span>Директ</span>
        </NavLink>
        {/* <NavLink className={styles.link} activeClassName={ styles.active } to="/stories">
          <span>Истории</span>
        </NavLink> */}
        <NavLink className={styles.link} activeClassName={ styles.active } to="/comments">
          <span>Комментарии</span>
        </NavLink>
        {/* <NavLink className={styles.link} activeClassName={ styles.active } to="/live">
          <span>Live продажи</span>
        </NavLink> */}
        {/* <NavLink className={styles.link} to="/shepherd">
          <span>Пастух</span>
        </NavLink> */}
        {/* <NavLink className={styles.link} activeClassName={ styles.active } to="/dashboard">
          <span>Дашборд</span>
        </NavLink> */}
        {/* <NavLink className={styles.link} activeClassName={ styles.active } to="/login">
          <span>Логин</span>
        </NavLink> */}
        {/* <NavLink className={styles.link} activeClassName={ styles.active } to="/register">
          <span>Регистрация</span>
        </NavLink> */}


      </div>
    </header>
  )
}

export default Navigation

