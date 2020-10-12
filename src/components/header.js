import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <div style={{display:'flex', justifyContent: 'space-evenly' }}>
        <h1>Welcome, User</h1>
        <h1>Funds:$$$</h1>
      </div>
    )
  }
}
