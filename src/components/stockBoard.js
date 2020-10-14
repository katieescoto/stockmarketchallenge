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
      limitTo: 15,
      funds: 0,
      userName:'',
      gainOrLoss: 0,
    }
    this.onLoadMore = this.onLoadMore.bind(this)
    this.addStock = this.addStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      let newPrice = stock.price * randomGrowth();
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

    // let toBuy = item.owned * item.price
    // if(toBuy < item.price){
    //   this.setState({
    //     gainOrLoss: toBuy - item.price
    //   })
    // } else {
    //   this.setState({
    //     gainOrLoss: toBuy + item.price
    //   })
    // }
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

    let toSell = item.owned * item.price
    if(toSell < item.price){
      this.setState({
        gainOrLoss: toSell - item.price
      })
    } else {
      this.setState({
        gainOrLoss: toSell + item.price
      })
    }
  }

  render() {

  const {stocks, limitTo, ownedStocks, userName, funds, gainOrLoss} = this.state

    return (
      <div>
          <UserForm userName={userName} funds={funds} onChange={this.handleChange} onSubmit={this.handleSubmit}/>

          <Navbar stocks={stocks} funds={funds} userName={userName} gainOrLossState={gainOrLoss} profitOrLoss={this.profitOrLoss} />

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

