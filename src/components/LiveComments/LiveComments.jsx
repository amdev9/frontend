

import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import SplashScreen from '../SplashScreen'
import CommentsView from '../CommentsInbox'
import Panel from '../Panel'
import RowComment from '../RowComment'
import styles from './LiveComments.module.scss'


function LiveComments(props) {

  const renderInbox = () => {
    return (
      <SplashScreen />
    )
  }

  const [broadcast, setBroadcast] = useState(null)

  const createLive = async () => {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/createLive',
      // data: { postId, message }
    })

    setBroadcast(res.data.broadcast_id)
    console.log(res)
  }

  const startBroadcast = async (broadcastId) => {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/startBroadcast',
      data: { broadcastId }
    })
    console.log(res)
  }

  const endBroadcast = async (broadcastId) => {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/endBroadcast',
      data: { broadcastId }
    })
    console.log(res)
  }

  return (
    <div className={styles.app}>
      <Panel panelUrl="http://localhost:3000/getBroadcasts" itemsComponent={RowComment}/> 
      {/* pass hook as param, comments row as component */}
      <Switch>
        <Route path="/live/t/:broadcastId" component={CommentsView} />
        {/* TODO: create hoc for CommentsView */}

        <Route path="/live" render={renderInbox} />
      </Switch>
      {/*  */}
      <button onClick={createLive}>Create live</button>
      <button onClick={() => startBroadcast(broadcast)}>Start broadcast</button>
      <button onClick={() => endBroadcast(broadcast)}>End broadcast</button>
    </div>
  )
}

export default LiveComments
