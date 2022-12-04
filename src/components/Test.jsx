import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    this.state = { mashina: 'Cobalt' }
  }
  render() {
    return (
      <div>My car {this.state.mashina}</div>
    )
  }
}
