import React, { Component } from 'react'

export default class navBar extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="header">
        <h1 className="header-start">Welcome, </h1>
        <h1 className="header-end">Funds: {this.props.funds}</h1>
      </div>
    );
  }
}
