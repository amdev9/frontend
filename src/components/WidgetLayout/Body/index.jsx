import React from 'react'
import PropTypes from 'prop-types'

import styles from './Body.module.scss'

const bodyProps = {
  children: PropTypes.any,
  isOpened: PropTypes.bool,
  isCollapsible: PropTypes.bool,
}

class Body extends React.PureComponent {
  static propTypes = bodyProps;

  render() {
    const { isCollapsible, isOpened, children } = this.props

    switch (true) {
      case (!isCollapsible): return (
        <div className={ styles.root }>{ children }</div>
      )

      case (isOpened): return (
        <div className={ styles.root }>
          { children }
        </div>
      )

      default: return null
    }
  }
}

export default Body
