
import React from 'react'
import { Route, Switch } from 'react-router-dom';

import DmMessages from '../DmMessages'
import SplashScreen from '../SplashScreen'
import Chat from '../Chat'
import Panel from '../Panel'
import styles from './Direct.module.scss'

function Direct() {
  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  return (
    <div className={styles.app}>
      <Panel />
      <Switch>
        <Route path="/direct/t/:clientId" component={Chat} />
        <Route path="/direct" render={renderInbox} />
      </Switch>
    </div>
  )
}

export default Direct
