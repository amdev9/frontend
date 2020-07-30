
import React from 'react'
import cn from 'classnames'
import Message from './Message'
import styles from './Messages.module.scss'

function Messages(props) {
  const items = props.items

  return (
    <div className={styles.wrapper}>
      <div id="view" className={styles.absWrap}>
        <div className={styles.view}>
          { items.map(item => <Message key={item.item_id} data={item} />) }
        </div>
      </div>
    </div>
  )
}

export default Messages

