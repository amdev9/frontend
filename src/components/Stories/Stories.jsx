
import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import SplashScreen from '../SplashScreen'
import StoriesInbox from '../StoriesInbox'
import Panel from '../Panel'
import RowStory from '../RowStory'
import styles from './Stories.module.scss'

function useItemsInitialization(url) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url)
      console.log(result.data)
      setItems(result.data)
    };
    fetchData();
  }, [url])

  return items
}

function Stories() {

  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  return (
    <div className={styles.app}>
      <Panel panelUrl="http://localhost:3000/getStories" useCustomHook={useItemsInitialization} itemsComponent={RowStory}/> 
      <Switch>
        <Route path="/stories/t/:storyId" component={StoriesInbox} />
        <Route path="/stories" render={renderInbox} />
      </Switch>
    </div>
  )

}

export default Stories
