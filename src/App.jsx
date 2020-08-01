import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames'

import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Direct from './components/Direct'
import Shepherd from './components/Shepherd'
import Dashboard from './components/Dashboard'
// import Chat from './components/Chat'
import Home from './components/Home'

import styles from './App.module.scss';

function App() {
  
  return (
    <div>
    <Navigation />
    <Switch>
      <Route path="/" exact render={ () => <Redirect to="/direct"/> }/>
      <Route path="/direct" component={ Direct }/>
      <Route path="/comments" component={ Home }/>
      <Route path="/shepherd" component={ Shepherd }/>
      <Route path="/dashboard" component={ Dashboard }/>
      <Route path="*" component={ NotFound }/>
    </Switch>
    </div>
  )
}

export default App;
