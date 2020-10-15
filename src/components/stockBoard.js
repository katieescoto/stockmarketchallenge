import React, { Component } from 'react'
import OwnedStock from './ownedStocks'
import './stockBoard.css'
import StocksTable from '../components/stocksTable'
import Navbar from './navBar'
import {randomGrowth} from './utils/randomGrowth'
import UserForm from './userForm'

export default class stockBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      stocks: [],
      ownedStocks: [],
      limitTo: 20,
      funds: 0,
      userName:'',
    }
    this.onLoadMore = this.onLoadMore.bind(this)
    this.addStock = this.addStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addPriceHistory = this.addPriceHistory.bind(this)
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

  addPriceHistory(stocks){
    let priceHistoryStocks = stocks.map((stock) => {
      return stock.priceHistory = [];
    })
    this.setState({
      stocks: priceHistoryStocks,
    });
  }

  growth(stocks){
    let updatedStocks = stocks.map((stock)=>{
      let newPrice = stock.price * randomGrowth();
      if (stock.priceHistory){
        if(stock.priceHistory.length===10){
          stock.priceHistory.pop();
        }
        stock.priceHistory.push(stock.price)
      } else {
        stock.priceHistory = [stock.price]
      }
      stock.price = +newPrice.toFixed(2)
      return stock
    })

    this.setState({
      stocks: updatedStocks
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){

    event.preventDefault()
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
        funds:this.state.funds - item.price
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

  const {stocks, limitTo, ownedStocks, userName, funds} = this.state
  const priceHistory = stocks.priceHistory;
  console.log(priceHistory)

    return (
      <div>
          <UserForm userName={userName} funds={funds} onChange={this.handleChange} onSubmit={this.handleSubmit}/>

          <Navbar funds={funds} userName={userName}/>

         <div className="row">
          <div className="column">
           <StocksTable data={stocks} limit={limitTo} onLoadMore={this.onLoadMore} addStock={this.addStock}/>
          </div>

          <div className="column">
            <OwnedStock ownedStocks={ownedStocks} sellStock={this.sellStock}/>
          </div>
        </div>
      </div>
    )
  }
}

