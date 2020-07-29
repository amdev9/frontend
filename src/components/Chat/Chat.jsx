import React from 'react'

import cn from 'classnames'
import Messages from './Messages'
import styles from './Chat.module.scss'

console.log(styles)

function Chat(props) {

  const chatViewHeight = 400
  const cns = {
    root: cn(
      styles.container,
    ),
  }

  return (
    <div className={ cns.root } >
      {/* <div className={ styles.adminPanel } >
        test
        
      </div> */}

      <div className={ styles.chatView }  style={{ height: chatViewHeight }}>
        {/* */}
        <Messages />
      </div>

      {/* <div className={ styles.chatForm } >
       
      </div> */}

    </div>
  )
}


export default Chat
