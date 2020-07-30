import React, { memo } from 'react'
import { areEqual } from 'react-window'
import { Link } from 'react-router-dom'
import cns from 'classnames'
import styles from './Row.module.scss'
// import Userpic from './Userpic'

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent

function Row(props) {
  console.log(props)
  // Data passed to List as "itemData" is available as props.data
  const { data, index, style } = props
  const items = data;
  const item = items[index];

  console.log('item -', item)
  const [user] = item.users
  // const src = require('./Untitled.png')

  return (

    <Link className={cns.client} to={`/direct/t/${item.thread_id}`} >
      {/* title={title} onClick={() => this.activateClientHd(client.id)} */}
      <div className={styles.avatar}>
        {/* {hasActiveCall &&
          <div className={styles.overlay}>
            <UI.Icon name="callcentre" className={styles.icon} size={[20, 20]} />
          </div>} */}

          <img className={styles.thumb} src={user.profile_pic_url} alt={user.full_name} />

        {/* {!!unreadMessages && <div className={styles.unreadMessages}>{unreadMessages}</div>}

        {playedCallBelongsToClient && (
          <div className={cn(styles.audioPlaybackControls, styles.playing)}>
            <CallPlayback />
          </div>
        )} */}
      </div>

      <div className={styles.content}>
        <div className={styles.name}>
          {user.username}
        </div>

        {/* <div className={styles.text}>
          {this.renderMsg(smallMode, typing, lastMessage)}
        </div>

        <div className={styles.time}>
          {lastMessage && !smallMode && this.renderTime(lastMessage.created_at)}
        </div> */}
      </div>
    </Link>
  );
};

export default memo(Row, areEqual)