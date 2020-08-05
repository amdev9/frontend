import React, { useState, useContext } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import cns from 'classnames'
import axios from 'axios'
import styles from './Form.module.scss'

import { Context } from '../CommentsInbox'

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
        <button onClick={sendMessage}>Отправить сообщение</button>
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
      </div>
    </form>
  )
}

export default Form