import React from 'react'
import { string, bool, func, element, any, object, oneOfType } from 'prop-types'
import { withRouter } from 'react-router'

import Header from './Header'
import Body from './Body'

import styles from './WidgetLayout.module.scss'

const widgetLayoutProps = {
  name: oneOfType([ string, element ]).isRequired,
  isOpened: bool,
  isLoading: bool,
  isCollapsible: bool,
  hideWidget: func,
  expandWidget: func,


  id: string,
  children: any,
  location: object,
}

const initialState = {}

class WidgetLayout extends React.PureComponent {
  static propTypes = widgetLayoutProps;

  constructor(props, ctx) {
    super(props, ctx)

    this.state = initialState
    this.widget = React.createRef()
  }


  toggleVisibility = (isShow) => {
    const { hideWidget, expandWidget } = this.props

    if (isShow && typeof hideWidget === 'function') hideWidget()

    if (!isShow && typeof expandWidget === 'function') expandWidget()
  }

  render() {
    const { isOpened, isCollapsible } = this.props

    return (
      <div id={ this.props.id } className={ styles.root } ref={ this.widget }>
        {/* <ScrollElement name={ this.props.id }/> */}

        <Header
          isOpened={ isOpened }
          title={ this.props.name }
          isCollapsible={ isCollapsible }
          isLoading={ this.props.isLoading }

          toggleVisibility={ this.toggleVisibility }
        />

        <Body isOpened={ isOpened } isCollapsible={ isCollapsible }>
          { this.props.children }
        </Body>
      </div>
    )
  }
}

export default withRouter(WidgetLayout)
