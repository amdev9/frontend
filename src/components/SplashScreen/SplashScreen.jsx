import React from 'react'
import './SplashScreen.scss'


function SplashScreen() {
  return (
    <div className="root">
      <div className="center">
        <div className="emoji">{ '🤓' }</div>
        <div className="title">
          { `Your Messages` }
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

