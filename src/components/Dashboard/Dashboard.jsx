
import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { withRouter, Switch, Route, Redirect } from 'react-router'
import Products from '../Products'
import Customers from '../Products'
import Can from '../Can'
import { AuthConsumer } from "../../context/authContext";
import Managers from '../Products'
import styles from './Dashboard.module.scss'
import PrivateRoute from '../PrivateRoute'

function Dashboard() {

  const renderNavigation = (user) => {
    return (
      <div className={styles.navigation}>
        <div className={styles.links}>
          <NavLink activeClassName={styles.active} to="/dashboard/managers">
            {`🎛️`} <span>Менеджеры</span>
          </NavLink>

          <Can
            role={user.role}
            perform="dashboard-page:visit"
            yes={() => (
              <NavLink activeClassName={styles.active} to="/dashboard/tasks">
                {`📋`} <span>Задачи</span>
              </NavLink>)
          } />
          <NavLink activeClassName={styles.active} to="/dashboard/products">
            {`👩‍🏫`} <span>Товары</span>
          </NavLink>
          <NavLink activeClassName={styles.active} to="/dashboard/stats">
            {`🤯 `} <span>Статистика</span>
          </NavLink>
        </div>
      </div >
    )
  }

  const renderContent = () => {
    return (
      <Switch>
        <PrivateRoute exact path="/dashboard" render={() => <Redirect to="/dashboard/tasks" />} />
        <PrivateRoute exact path="/dashboard/managers" component={Managers} />
        <PrivateRoute exact path="/dashboard/products" component={Products} />
        <PrivateRoute exact path="/dashboard/tasks" component={Customers} />
        <PrivateRoute exact path="/dashboard/stats" component={Customers} />
      </Switch>
    )
  }

  return (
    <AuthConsumer>
      {({ user }) => (

        <div className={styles.content}>
          {renderNavigation(user)}
          {renderContent()}
        </div>

      )}
    </AuthConsumer>
  )
}

export default Dashboard
