
import React from 'react'
import cn from 'classnames'
import Comment from './Comment'
import styles from './Messages.module.scss'

function Messages(props) {
  const items = props.items

  console.log('comments items ', items)
  return (
    <div className={styles.wrapper}>
      <div id="view" className={styles.absWrap}>
        <div className={styles.view}>
          {/* { items.map(item => <Comment key={item.pk} data={item} />) } */}
        </div>
      </div>
    </div>
  )
}

export default Messages

