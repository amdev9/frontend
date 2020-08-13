

import React from 'react'
import cn from 'classnames'
import { format } from '../../../../helpers/dateFns'
import styles from './Comment.module.scss'
import { fromUnixTime } from 'date-fns/esm'

function Comment(props) {

  const {   
    user_id,
    created_at,
    // item_type,
    text,
    // client_context
    // show_forward_attribution
    // is_shh_mode
  } = props.data


  const renderTextMessage = () => {

    const isAdmin = false
    return (
      <div className={ cn(styles.wrapper, isAdmin && styles.isAdmin) }>
        <div className={ cn(styles.content, isAdmin && styles.isAdmin) }>
          { isAdmin &&
            <div className={ styles.title }>{ user_id }</div> }

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

          { Boolean(text) &&
            <div className={ cn(styles.body, styles.unread) }>
              {/* isAdmin && styles.isAdmin, (isAdmin && !msgData.read_by_user_at) &&  */}
              <div className={ styles.date }>
                { format(fromUnixTime(created_at), 'dd MMM yyyy HH:mm') }
              </div>

              { text }
            </div> }
        </div>

        {/* { isAdmin && !hideUser &&
          <a className={ styles.avatar } target="_blank" rel="noopener noreferrer" href={ adminUrl }>
            <UI.Userpic url={ msgData.author.avatar_url } size={ 34 } className={ styles.avatarImg }/>
          </a> } */}
      </div>
    )
  }

  return (
    <div className={ cn(styles.msg) }>
      {/*  msg.isTemporary && styles.isTemporary */}
      { renderTextMessage() }
      {/* item_type === 'text' && */}
    </div>
  )
}

export default Comment