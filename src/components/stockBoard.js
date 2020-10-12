import React, { Component } from 'react'
//import OwnedStock from './ownedStock'
import Navbar from './navBar'

export default class stockBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
      ownedStocks: [],
      limitTo: 20,
      funds: 10000
    }
    this.onLoadMore = this.onLoadMore.bind(this)
    this.buyStock = this.buyStock.bind(this)
  }

  onLoadMore(){
    this.setState({
      limitTo: this.state.limitTo + 10
    })
  }

  buyStock(item){
    let newStock = [...this.state.ownedStocks]
    newStock.push(item)
    let newFunds = this.state.funds - item.price

    this.setState({
      ownedStocks: newStock,
      funds: newFunds,
    })
    console.log('this is the state', this.state.ownedStocks)
    console.log('these are the funds:', this.state.funds)
  }

 componentDidMount(){
   fetch(process.env.PUBLIC_URL + "data/mockStocks.json")
    .then((res) => {
      if(res.status >= 400){
        throw new Error('bad response')
      }
      return res.json()
    })
    .then(
      (data) => {
        this.setState({
          stocks: data.stocks
        })
      }
    )
 }

  render() {
    const { stocks } = this.state
    return (
      <div>
        <Navbar funds={this.state.funds}/>
        <h1>Stock Boards</h1>
        <ul>
          {stocks.slice(0, this.state.limitTo).map(item => (
            <li key={item.id}>
              <p>CompanyName:{item.companyName}</p>
              <p>Price: $ {item.price}/share</p>
              <button type="button" onClick={()=> this.buyStock(item)}>BUY</button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={this.onLoadMore}>Load more </button>
      </div>
    )
  }
}
