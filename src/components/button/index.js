import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.clickOnButton = this.clickOnButton.bind(this)
  }

  clickOnButton(e) {
    alert('clicou')
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <button onClick={this.clickOnButton}>{text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
