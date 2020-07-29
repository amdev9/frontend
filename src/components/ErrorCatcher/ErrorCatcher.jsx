import React from 'react'
import { node } from 'prop-types'

// import UI from 'components/ui'

import styles from './ErrorCatcher.module.scss'


class ErrorCatcher extends React.Component {
  static propTypes = {
    children: node,
  }

  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true })

    // Sentry.log(err, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={ styles.root }>
          <h1>😵</h1>
          <h2>Воу-воу, палехче!</h2>
          <h2>Не знаю какие вы там кнопки жмёте, но всё сломалось.</h2>
          <button
            onClick={ () => window.location.reload() }
          >Перезагрузить страницу</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorCatcher
