import React, { Component, PropTypes } from 'react'

export default class Link extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { active, children, onClick } = this.props
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           onClick()
         }}
      >
        {children}
      </a>
    )
  }
}