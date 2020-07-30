import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames'

import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Direct from './components/Direct'
import Shepherd from './components/Shepherd'
import Dashboard from './components/Dashboard'
// import Chat from './components/Chat'
import PostComments from './components/Comments'

import styles from './App.module.scss';

function App() {
  
  return (
    <div className={cn(styles.container, styles.app)}>
      <Navigation />
      <div className={styles.appBody}>
        <Switch>
          <Route path="/" exact render={ () => <Redirect to="/direct"/> }/>
          <Route path="/direct" component={ Direct }/>
          <Route path="/comments" component={ PostComments }/>
          <Route path="/shepherd" component={ Shepherd }/>
          <Route path="/dashboard" component={ Dashboard }/>
          <Route path="*" component={ NotFound }/>

        </Switch>
      </div>
    </div>
  )
}

export default App;
