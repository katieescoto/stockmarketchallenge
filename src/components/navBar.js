import React, { Component } from 'react'
import './navBar.css'

export default class navBar extends Component {

  render() {
    const {userName, funds} = this.props

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    return (
      <div className="header">
        {/* <p><img alt='logo' src="https://img.icons8.com/windows/32/000000/stocks.png"/></p> */}
        <div className='portfolio'>
          <h3 className='box'>hi,{userName}</h3>
          <h3 className='box'>Funds: {formatter.format(funds)}</h3>
        </div>

      </div>
    );
  }
}
