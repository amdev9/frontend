
import React from 'react'
import { Route, Switch } from 'react-router-dom';

import DmMessages from '../DmMessages'
import SplashScreen from '../SplashScreen'
import Chat from '../Chat'
import Panel from '../Panel'

function Direct() {
  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  return (
    <React.Fragment>
      <Panel />
      <Switch>
        {/* <Route path="/direct" exact render={ () => <Redirect to="/direct/inbox"/> }/> */}
        <Route path="/direct/t/:clientId" component={Chat} />
        <Route path="/direct" render={renderInbox} />
      </Switch>
    </React.Fragment>
  )
}

export default Direct
