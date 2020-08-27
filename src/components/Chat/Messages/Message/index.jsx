

import React from 'react'
import cn from 'classnames'
import { format } from '../../../../helpers/dateFns'
import styles from './Message.module.scss'

function Message(props) {

  const {
    user_id,
    timestamp,
    item_type,
    // text,
    // client_context
    // show_forward_attribution
    // is_shh_mode
  } = props.data
  console.log('Message props.data ', props.data)



  const renderLike = () => {
    return (
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.content)}>

          <div className={cn(styles.body, styles.unread)}>

            <div className={styles.date}>
              {format(Number(timestamp.slice(0, 13)), 'dd MMM yyyy HH:mm')}
            </div>

            {`like`}
          </div>

        </div>
      </div>
    )
  }
  const renderRavenMedia = () => {
    const { item_id } = props.data
    const isAdmin = false
    return (
      <div className={cn(styles.wrapper, isAdmin && styles.isAdmin)}>
        <div className={cn(styles.content, isAdmin && styles.isAdmin)}>
          {isAdmin &&
            <div className={styles.title}>{user_id}</div>}


          {Boolean(item_id) &&
            <div className={cn(styles.body, styles.unread)}>
              {/* isAdmin && styles.isAdmin, (isAdmin && !msgData.read_by_user_at) &&  */}
              <div className={styles.date}>
                {format(Number(timestamp.slice(0, 13)), 'dd MMM yyyy HH:mm')}
              </div>

              {`raven_media ${item_id}`}
            </div>}
        </div>
      </div>
    )
  }

  const renderReelShare = () => {
    const { reel_share } = props.data
    const isAdmin = false
    return (
      <div className={cn(styles.wrapper, isAdmin && styles.isAdmin)}>
        <div className={cn(styles.content, isAdmin && styles.isAdmin)}>
          {isAdmin &&
            <div className={styles.title}>{user_id}</div>}


          {Boolean(reel_share.text) &&
            <div className={cn(styles.body, styles.unread)}>
              {/* isAdmin && styles.isAdmin, (isAdmin && !msgData.read_by_user_at) &&  */}
              <div className={styles.date}>
                {format(Number(timestamp.slice(0, 13)), 'dd MMM yyyy HH:mm')}
              </div>

              {reel_share.text}
            </div>}
        </div>
      </div>
    )
  }

  const renderLinkMessage = () => {

    const { link } = props.data
    const isAdmin = false
    return (
      <div className={cn(styles.wrapper, isAdmin && styles.isAdmin)}>
        <div className={cn(styles.content, isAdmin && styles.isAdmin)}>
          {isAdmin &&
            <div className={styles.title}>{user_id}</div>}
          {Boolean(link) &&
            <div className={cn(styles.body, styles.unread)}>
              {/* isAdmin && styles.isAdmin, (isAdmin && !msgData.read_by_user_at) &&  */}
              <div className={styles.date}>
                {format(Number(timestamp.slice(0, 13)), 'dd MMM yyyy HH:mm')}
              </div>

              {link.text}
              {link.link_context.link_title}
              {link.link_context.link_summary}
            </div>}
        </div>
      </div>
    )

  }

  const renderTextMessage = () => {

    const { text } = props.data
    const isAdmin = false
    return (
      <div className={cn(styles.wrapper, isAdmin && styles.isAdmin)}>
        <div className={cn(styles.content, isAdmin && styles.isAdmin)}>
          {isAdmin &&
            <div className={styles.title}>{user_id}</div>}

          {/* { Boolean(hasAttachments) &&
            <div className={ styles.attachments }>
              { Boolean(images.length) && images.map((file) => {
                const { image = {}, id } = file

                return (
                  <UI.MarkableImage
                    key={ id }
                    id={ id }
                    src={ file.url }
                    width={ image.width }
                    height={ image.height }
                    onShow={ this.props.onImageClick }
                    isEds={ eds }
                    onAssociate={ this.props.onAssociateImgWithDoc }
                  />
                )
              }) }

              { Boolean(documents.length) &&
                <Documents
                  documents={ documents }
                  onShowFilePreview={ this.props.onDocumentClick }
                /> }

              { Boolean(extracts.length) &&
                <Documents
                  documents={ extracts }
                  onShowFilePreview={ this.props.onDocumentClick }
                /> }

              { Boolean(operations.length) &&
                <Operations
                  clientId={ this.props.clientId }
                  isAdmin={ isAdmin }
                  isTemporary={ msgData.temporary }
                  operations={ operations }
                  dispatch={ this.props.dispatch }
                /> }

              { Boolean(stickers.length) &&
                <Stickers
                  isAdmin={ isAdmin }
                  stickers={ stickers }
                /> }

              { Boolean(ratings.length) &&
                <Ratings
                  ratings={ ratings }
                /> }

              { !msgData.body && (
                <div className={ styles.attachmentDate }>
                  { format(msgData.created_at, 'dd MMM yyyy HH:mm') }
                </div>
              ) }
            </div> } */}

          {Boolean(text) &&
            <div className={cn(styles.body, styles.unread)}>
              {/* isAdmin && styles.isAdmin, (isAdmin && !msgData.read_by_user_at) &&  */}
              <div className={styles.date}>
                {format(Number(timestamp.slice(0, 13)), 'dd MMM yyyy HH:mm')}
              </div>

              {text}
            </div>}
        </div>

        {/* { isAdmin && !hideUser &&
          <a className={ styles.avatar } target="_blank" rel="noopener noreferrer" href={ adminUrl }>
            <UI.Userpic url={ msgData.author.avatar_url } size={ 34 } className={ styles.avatarImg }/>
          </a> } */}
      </div>
    )
  }

  return (
    <div className={cn(styles.msg)}>
      {/*  msg.isTemporary && styles.isTemporary */}
      {item_type === 'text' && renderTextMessage()}
      {item_type === 'link' && renderLinkMessage()}
      {item_type === 'like' && renderLike()}
      {item_type === 'reel_share' && renderReelShare()}
      {item_type === 'raven_media' && renderRavenMedia()}
    </div>
  )
}

export default Message