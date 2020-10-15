import React, { Component } from 'react'
import './navBar.css'

export default class navBar extends Component {
  constructor(props){
    super(props);
    this.randomStocks = this.randomStocks.bind(this)
  }

  randomStocks(stocks){
    return stocks[Math.floor(Math.random() * stocks.length)]
  }

  render() {
    const {userName, funds, stocks, gainOrLossState} = this.props

    const obj = JSON.stringify(this.randomStocks(stocks))
    console.log(obj)
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    return (
      <div className='navHeader'>
        <div className='portfolio'>
          <h3 className='boxWelcome'>WELCOME, {userName}</h3>
          <h3 className='box'>FUNDS: {formatter.format(funds)}</h3>
      {gainOrLossState > 0 ? <h3 style={{color:'orange'}}>^PROFIT:  {formatter.format(gainOrLossState)}</h3>: <h3 style={{color:'tomato'}}>LOSS: {formatter.format(gainOrLossState)}</h3>}
          <h4>
          <pre>Trading Right NOW:{obj}</pre>
          </h4>
        </div>
      </div>
    );
  }
}


