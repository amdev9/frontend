import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

function NotFound() {

  return (
    <div className={styles.page}>
      <div className={styles.emoj}>{'🙅🏼'}</div>
      <div className={styles.stat}>404</div>
      <div className={styles.description}>
        Тут ничего нет
      </div>
      <Link to="/" className="lin">
        На главную
      </Link>
    </div>
  )
}

export default NotFound

