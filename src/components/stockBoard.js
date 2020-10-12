import React, { Component } from 'react'
import OwnedStock from './ownedStocks'
import './stockBoard.css'
import StocksTable from '../components/stocksTable'
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
    this.addStock = this.addStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
    //this.growth = this.growth.bind(this)
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
       this.interval = setInterval(()=>this.growth(this.state.stocks),3000)

  }

  growth(stocks){
    let updatedStocks = stocks.map((stock)=>{
      let newPrice = stock.price + 100;
      stock.price = newPrice
      return stock
    })

    this.setState({
      stocks: updatedStocks
    })

    console.log(this.state.stocks)
  }


  onLoadMore(){
    this.setState({
      limitTo: this.state.limitTo + 10
    })
  }

  addStock(item){
    if(item.owned === 0){
      item.owned = 1
    } else {
      item.owned += 1
    }

    if(this.state.funds < item.price){
      alert('not enough funds')
    } else {
      this.setState({
        ownedStocks: [...this.state.ownedStocks, item],
        funds: this.state.funds - item.price
      })
    }
  };

  sellStock(item){
    if(item.owned > 0){
      this.setState({
        funds: this.state.funds + item.price,
        owned: item.owned--
      })
    } else{
      alert('no more shares to sell!')
    }
  }

  render() {

  const {stocks, limitTo, ownedStocks} = this.state

    return (
      <div>
          <Navbar funds={this.state.funds}/>

         <div className="row">
          <div className="column">
           <StocksTable data={stocks} limit={limitTo} onLoadMore={this.onLoadMore} addStock={this.addStock}/>
          </div>


          <div className="column">
            <OwnedStock ownedStocks={ownedStocks} sellStock={this.sellStock}/>
            <p>growth: {this.interval}</p>
          </div>


        </div>

      </div>
    )
  }
}

