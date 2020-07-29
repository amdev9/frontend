
import React from 'react'
import { Route, Switch } from 'react-router-dom';

import DmMessages from '../DmMessages'
import SplashScreen from '../SplashScreen'
import Chat from '../Chat'
import Panel from '../Panel'

function Direct() {
  const renderInbox = () => {
    return (
      <Chat />
      // <SplashScreen />
    )
  }

  return (
    <>
      <Panel />

      
        <Switch>
          {/* <Route path="/direct" exact render={ () => <Redirect to="/direct/inbox"/> }/> */}
          <Route path="/direct/t/:clientId" component={DmMessages} />
          <Route path="/direct" render={renderInbox} />
        </Switch>

    </>
  )
}

export default Direct
