import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames'


import NotFound from './components/NotFound'
import Direct from './components/Direct'
import Shepherd from './components/Shepherd'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import LiveComments from './components/LiveComments'
import Comments from './components/Comments'
import Stories from './components/Stories'
import PrivateRoute from './components/PrivateRoute'
import { AuthContext } from './context/auth'
import Auth from "./components/Auth";

import styles from './App.module.scss';

function App() {

  // TODO: migrate to official api
  const tokens = localStorage.getItem('tokens')


  const [authTokens, setAuthTokens] = useState(tokens || '');

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data) || '');
    setAuthTokens(data);
  }

  return (
    <div className={styles.fcontainer}>
      <Auth>
        {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
          
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/profile" />} />
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/register" component={SignUp} /> */}
            <Route path="/profile" component={Home} />
            <Route path="/direct" component={Direct} />
            <Route path="/stories" component={Stories} />
            <Route path="/comments" component={Comments} />
            <Route path="/live" component={LiveComments} />
            <Route path="/shepherd" component={Shepherd} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        {/* </AuthContext.Provider> */}
      </Auth>
    </div>
  )
}

export default App;
