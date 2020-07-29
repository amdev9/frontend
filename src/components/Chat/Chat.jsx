import React, { useEffect, useState } from 'react'

import cn from 'classnames'
import styles from './Chat.module.scss'

console.log(styles)

function Chat(props) {

  const chatViewHeight = 10
  const cns = {
    root: cn(
      styles.container,
      // this.props.smallMode && styles.smallMode,
    ),
  }

  return (
    <div className={ cns.root } >
      <div className={ styles.adminPanel } >
        test
        {/* <Header editingDisabled={ editingDisabled }/> */}
      </div>

      <div className={ styles.chatView }  style={{ height: chatViewHeight }}>
        {/* */}
        {/* <Messages needScrollBottom={ scrollBottom } scrollBottom={ this.scrollBottom }/> */}
      </div>

      <div className={ styles.chatForm } >
        {/* { hasForm && <Form scrollBottom={ this.scrollBottom }/> } */}
      </div>

    </div>
  )
}


export default Chat
