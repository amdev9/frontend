import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cn from 'classnames'
import Messages from './Messages'
import Form from './Form'
import Header from './Header'
import ClientDashboard from '../ClientDashboard'
import { useInterval } from '../../helpers/useInterval'


import styles from './Chat.module.scss'


export const Context = React.createContext(null);

const FETCH_DATA_INTERVAL = 160000

function Chat(props) {

  const clientId = props.match.params.clientId
  const [items, setItems] = useState([])

  useInterval(async () => {
    const result = await axios({
      method: 'POST',
      url: 'http://localhost:3000/getTextMessages',
      data: { clientId }
    })
    const resItems = result.data; // .map(item => ({ id: item.item_id, txt: item.text }))
    setItems(resItems)
  }, FETCH_DATA_INTERVAL)


  useEffect(() => {

    const fetchData = async () => {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/getTextMessages',
        data: { clientId }
      })

      const resItems = result.data; //.map(item => ({id: item.item_id, txt: item.text }))

      setItems(resItems)
    };

    fetchData();
  }, [clientId])


  // const chatViewHeight = 400
 
  return (
    <Context.Provider value={clientId}>
      <div className={styles.container} >
        <div className={ styles.adminPanel }>
          <Header />
        </div>

        <div className={styles.chatView}>
          {/*  style={{ height: chatViewHeight }} */}
          <Messages items={items} />
        </div>
        <div className={styles.chatForm} >
          <Form />
        </div>
      </div>
      <ClientDashboard />
    </Context.Provider>
  )
}


export default Chat
