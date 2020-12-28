
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'

import Row from '../Row'
import SplashScreen from '../SplashScreen'
import Chat from '../Chat'
import Panel from '../Panel'
import Navigation from '../Navigation'
import styles from './Direct.module.scss'


function useItemsInitialization(url) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url)
      // console.log(result.data)
      setItems(result.data)
    };
    fetchData();
  }, [url])

  return items
}


function Direct() {
  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  return (
    <div>
    <Navigation />
    <div className={styles.app}>
      
      <Panel panelUrl="http://localhost:3000/getThreads" useCustomHook={useItemsInitialization} itemsComponent={Row} />
      <Switch>
        <Route path="/direct/t/:clientId" component={Chat} />
        <Route path="/direct" render={renderInbox} />
      </Switch>
    </div>
    </div>
  )
}

export default Direct
