import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames'

import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Direct from './components/Direct'
import Shepherd from './components/Shepherd'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'
import LiveComments from './components/LiveComments'
import Comments from './components/Comments'
import Stories from './components/Stories'
import PrivateRoute from './components/PrivateRoute'
import { AuthContext } from './context/auth'

import styles from './App.module.scss';

function App() {

  const tokens = localStorage.getItem('tokens')
  

  const [authTokens, setAuthTokens] = useState(tokens || '');

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data) || '');
    setAuthTokens(data);
  }

  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Navigation />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/direct" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Home} />
          <PrivateRoute path="/direct" component={Direct} />
          <PrivateRoute path="/stories" component={Stories} />
          <PrivateRoute path="/comments" component={Comments} />
          <PrivateRoute path="/live" component={LiveComments} />
          <PrivateRoute path="/shepherd" component={Shepherd} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="*" component={NotFound} />
        </Switch>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
