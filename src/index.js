import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import Container from './components/container'
import Button from './components/button'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    textButton: PropTypes.string
  }

  render() {
    const { text, textButton } = this.props

    return (
      <React.Fragment>
        <Container style={styles}>
          <div>Example Component: {text}</div>
          <div>
            <Button text={textButton} />
          </div>
        </Container>
      </React.Fragment>
    )
  }
}
