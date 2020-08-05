import React, { memo, useState } from 'react'
import { areEqual } from 'react-window'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Row.module.scss'
// import Userpic from './Userpic'

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent

function Row(props) {
  // Data passed to List as "itemData" is available as props.data
  const { data, index, style } = props
  const { items, activeIndex, setActiveIndex } = data;
  const item = items[index];

  console.log('item -', item)
  const [user] = item.users
  // const src = require('./Untitled.png')
  const cns = {
    client: cn(
      styles.client,
     
      activeIndex === index && styles.active,
      // hasActiveCall && styles.vox,
      // hasUnresolved && styles.unresolved,
      // smallMode && styles.smallMode
    ),
  }

  return (

    <Link className={cns.client} to={`/direct/t/${item.thread_id}`} onClick={ () => setActiveIndex(index) }>

      <div>
        <img className={styles.thumb} src={user.profile_pic_url} alt={user.full_name} />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          {user.username}
        </div>

        <div className={styles.text}>
          Здравствуйте, Мария as da sd asd as dasd 
      </div>

        <div className={styles.time}>
          66 д. назад
        {/* { lastMessage && !smallMode && this.renderTime(lastMessage.created_at) } */}
        </div>
      </div>


    </Link>
  );
};

export default memo(Row, areEqual)