import React from 'react'

function Userpic({ src, size, alt }) {
  const style = {
    width: `${size}px`,
    minWidth: `${size}px`,
    maxWidth: `${size}px`,

    height: `${size}px`,
    minHeight: `${size}px`,
    maxHeight: `${size}px`,
  }

  return (
    <div className="userpic">
      <img src={ src } alt={ alt } style={ style }/>
    </div>
  )   
}

export default Userpic
