import React from 'react'
import cn from 'classnames'
import { oneOfType, string, element, bool, any, func } from 'prop-types'

import Icon from '../../../ui/Icon'

import styles from './Header.module.scss'

const headerProps = {
  title: oneOfType([string, element]),
  isOpened: bool,
  isCollapsible: bool,
  getCustomHeader: any,
  isLoading: bool,
  toggleVisibility: func,
}

class Header extends React.PureComponent {
  static propTypes = headerProps;

  getCustomHeader = () => {
    if (typeof this.props.getCustomHeader === 'function') {
      return this.props.getCustomHeader()
    }

    return this.props.getCustomHeader
  };

  getButtonContent = () => {
    const { isOpened, isLoading } = this.props

    switch (true) {
      case (!isOpened && !isLoading): return (
        <Icon className={ styles.icon } name="colored/widget-open" size={ [12, 12] }/>
      )

      case (isOpened && !isLoading): return (
        <Icon className={ styles.icon } name="colored/widget-close" size={ [12, 12] }/>
      )

      // case (isLoading): return (
      //   <UI.Spinner transparent active strokeWidth="4" color="gray" size={ [24, 24] }/>
      // )

      default: return null
    }
  };

  toggleVisibilityHd = () => {
    if (this.props.isLoading) return null
    const { toggleVisibility, isOpened } = this.props

    toggleVisibility && toggleVisibility(isOpened)
  };

  render() {
    const cns = {
      iconWrapper: cn(
        styles.iconWrapper,
        this.props.isLoading && styles.disabled
      ),
    }

    return (
      <div className={ styles.root }>
        <div className={ styles.titleWrapper }>
          {(this.props.isCollapsible) && (
            <button className={ cns.iconWrapper } onClick={ this.toggleVisibilityHd }>
              { this.getButtonContent() }
            </button>
          )}

          <div className={ styles.title }>{ this.props.title }</div>
        </div>
      </div>
    )
  }
}

export default Header
