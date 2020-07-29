
import React from 'react'
import cn from 'classnames'
import Message from './Message'
import styles from './Messages.module.scss'

function Messages(props) {

  const items = props.items
  
  return (
    <div className={ styles.wrapper }>
      {/* { disabled && (
        <div className={ styles.noMessages }>Невозможно просмотреть сообщения</div>
      ) } */}

      {/* { !disabled && !haveTickets && !isHistoryLoading && (
        <div className={ styles.noMessages }>Нет сообщений</div>
      ) } */}

      <div id="view" className={ styles.absWrap }>
        <div className={ styles.view }>
           
          {/* <div className={ styles.historyLoader }>
            <UI.Spinner active={ !disabled && isHistoryLoading } color="blue" size={ [30, 30] } strokeWidth="6"/>
          </div> */}

{
  items.map( item =>  <Message key={item.id} msg={item.txt}/>)
      
// msg={ item }
// eds={ activeClientIsEDS }
// key={ `${item.id}_${item.type}` }
// dispatch={ this.props.dispatch }
// clientId={ this.props.activeClient.id }
// onImageClick={ this.onImageClick }
// onDocumentClick={ this.onDocumentClick }
// onAssociateImgWithDoc={ this.handleAssociateImgWithDoc }

}
         
                
                {/* ) } */}

          {/* { !disabled && this.props.chatTickets.map((ticket) => (
            <div className={ styles.ticket } key={ ticket.id }>
              { ticket.content.map((item) =>
                

              { ticket.status === 'closed' && this.renderSeparator(ticket) }
            </div>
          ))} */}
        </div>
      </div>

      {/* <div className={ cn(styles.scroller, showScroller && styles.showScroller) } onClick={ this.scrollToBottom }>
        <UI.Icon name="arrowBottom" size={ [16, 8] } className={ styles.scrollerIcon }/>
      </div> */}
    </div>
  )
}

export default Messages

