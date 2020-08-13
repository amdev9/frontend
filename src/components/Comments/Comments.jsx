
import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import SplashScreen from '../SplashScreen'
import CommentsView from '../CommentsInbox'
import Panel from '../Panel'
import RowComment from '../RowComment'
import styles from './Comments.module.scss'


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

function Comments() {

  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  return (
    <div className={styles.app}>
      <Panel panelUrl="http://localhost:3000/getPosts" useCustomHook={useItemsInitialization} itemsComponent={RowComment}/> 
      {/* pass hook as param, comments row as component */}
      <Switch>
        <Route path="/comments/t/:postId" component={CommentsView} />
        <Route path="/comments" render={renderInbox} />
      </Switch>
    </div>
  )

}

export default Comments
