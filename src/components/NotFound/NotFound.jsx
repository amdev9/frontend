import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.scss'

function NotFound() {


  return (
    <div className="page">
      <div className="emoj">{'🙅🏼'}</div>
      <div className="stat">404</div>
      <div className="description">
        Тут ничего нет
      </div>
      <Link to="/" className="lin">
        На главную
      </Link>
    </div>
  )
}

export default NotFound

