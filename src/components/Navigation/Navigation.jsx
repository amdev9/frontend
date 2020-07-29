import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.scss'


function Navigation() {
  return (
    <div className="root">
      <div className="links">
        {/* default route - Профиль */}
        <NavLink className="link" to="/direct">
          <span>Директ</span>
        </NavLink>
        <NavLink className="link" to="/comments">
          <span>Комментарии</span>
        </NavLink>
        <NavLink className="link" to="/shepherd">
          <span>Пастух</span>
        </NavLink>
        <NavLink className="link" to="/dashboard">
          <span>Дашборд</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation

