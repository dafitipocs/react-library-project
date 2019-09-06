import React from 'react'
import PropTypes from 'prop-types'
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children, style } = this.props
    const { container } = style
    return <div className={container}>{children}</div>
  }
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Container
