
import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { withRouter, Switch, Route, Redirect } from 'react-router'
import Products from '../Products'
import Customers from '../Products'
import Managers from '../Products'
import styles from './Dashboard.module.scss'

function Dashboard() {

  const renderContent = () => {
    return (
      <Switch>
        <Route exact path="/dashboard" render={ () => <Redirect to="/dashboard/tasks"/> } />
        <Route exact path="/dashboard/managers" component={ Managers } />
        <Route exact path="/dashboard/products" component={ Products } />
        <Route exact path="/dashboard/tasks" component={ Customers } />
        <Route exact path="/dashboard/stats" component={ Customers } />
      </Switch>
    )
  }

  const renderNavigation = () => {
    return (
      <div className={styles.navigation}>
        <div className={styles.links}>
          <NavLink activeClassName={styles.active} to="/dashboard/managers">
            {`🎛️`} <span>Менеджеры</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/tasks">
            {`📋`} <span>Задачи</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/products">
            {`👩‍🏫`} <span>Товары</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/stats">
            {`🤯 `} <span>Статистика</span>
          </NavLink> 
        </div>
      </div>
    )
  }
  
  return (
    <div className={styles.content}>
      { renderNavigation() }
      { renderContent() }
    </div>
  )
}

export default Dashboard
