import React, { useState, useContext } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import cns from 'classnames'
import axios from 'axios'
import styles from './Form.module.scss'

import { Context } from '../Chat'

const MAX_CHAT_SYMBOLS = 281

function Form() {
  const [message, setMessage] = useState('')
  const clientId = useContext(Context);

  const handleTextInputChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/sendTextMessage',
      data: { clientId, message }
    })
    console.log(res)
    setMessage('')
  }

  return (
    <div className={styles.container}>
      <div className={cns.attachment}>
        {/* <div className={styles.body}>
          {attachments.map((attachment) => this.renderAttachment(attachment))}
        </div> */}
      </div>

      <form className={styles.form}>
        <div className={styles.wrapper}>
           
          <TextareaAutosize
            autoFocus
            // ref={this.textarea}
            id="chatTextArea"
            rows={1}
            maxRows={15}
            className={styles.textInput}
            placeholder="Напишите сообщение…"
            value={message}
            // onKeyDown={this.handleKeyDown}
            // onBlur={this.handleCaretPosition}
            onChange={handleTextInputChange}
            // onResize={this.changeHeightHd}
          />
          <button  onClick={sendMessage}>Отправить сообщение</button>
          {/* className={cns(styles.sendBtn)} */}

          {(message > 0) && (
            <div className={cns(
              styles.counter,
              (message.length > MAX_CHAT_SYMBOLS) && styles.overflow,
              // disableSending && styles.template,
            )}>
              {MAX_CHAT_SYMBOLS - message.length}
            </div>
          )}

          {/* <div title="Эмоджи и стикеры" className={cns.stickersBtn}>
            <UI.Icon
              name="stickers"
              size={[20, 20]}
              data-for="EmojiesPopup"
              onClick={this.handleChangeEmojiesVisibility}
            />

            <Emojies id="EmojiesPopup" top center isVisible={showEmojies} onChangeVisibility={this.changeEmojiesVisibility} />
          </div>

          {(!!chat.text && !disableSending) || attachments.length
            ? (
              <div
                title="Жми, чтобы отправить сообшение"
                className={cn(styles.sendBtn, sendingMessage && styles.disabled)}
              >
                <UI.Icon name="triangle" onClick={!sendingMessage ? this.handleSubmit : undefined} size={[20, 20]} />
              </div>
            ) : (
              hasEkatTrait && (<div title="Жми, для передачи клиента" className={cns.muteBtn} onClick={this.transferClientHd}>
                <UI.Icon name="skip_next" size={[20, 20]} className={styles.arrow} />
              </div>)
            )} */}
        </div>
      </form>
    </div>
  )
}

export default Form 