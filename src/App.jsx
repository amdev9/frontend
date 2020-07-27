import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Panel from './components/Panel'
import Navigation from './components/Navigation'
import SplashScreen from './components/SplashScreen'

import './App.scss';

function App() {
  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  const renderDmMessages = () => {
    return (
      <div>
        this is direct messages
      </div>
    )
  }

  return (
    <div className="container">
      <Navigation />
      <div className="app">
        <Panel />
        <SplashScreen />
        <Switch>
          <Route path="/t/:clientId" render={renderDmMessages} />
          <Route path="/inbox" render={renderInbox} />
        </Switch>
      </div>
    </div>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
