import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './Icon.module.scss'

class Icon extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.array,
    className: PropTypes.string,
  }

  render() {
    let { name, size, className, ...rest } = this.props

    if (!name) {
      return null
    }

    let cns = cn(`${styles.icon}`, className)

    let style = size
      ? { width: size[0], height: size[1], lineHeight: size[1] }
      : {}

    const { id } = require(`../../assets/icons/${name}.svg`).default

    return (
      <span { ...rest } className={ cns } style={ style }>
        <svg className={ styles.svg }>
          <use xlinkHref={ `#${id}` }/>
        </svg>
      </span>
    )
  }
}

export default Icon
