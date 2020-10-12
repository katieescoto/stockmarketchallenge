import React, { Component } from 'react'
import OwnedStock from './ownedStocks'
import './stockBoard.css'
import StocksTable from '../components/stocksTable'
import Header from '../components/header'

export default class stockBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      stocks: [],
      ownedStocks: [],
      limitTo: 15,
      // timer: 1
    }
    this.onLoadMore = this.onLoadMore.bind(this)
    this.addStock = this.addStock.bind(this)

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
      // this.timeOut = setInterval(() =>{
      //   this.setState({timer: this.state.timer + 1})
      // }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeOut)
  }

  onLoadMore(){
    this.setState({
      limitTo: this.state.limitTo + 10
    })
  }

  addStock(item){
    this.setState({
      ownedStocks: [...this.state.ownedStocks, item]
    })
    // console.log(this.state.stocks)
  };

  render() {
  const {stocks, limitTo, ownedStocks} = this.state

  //   let growth = (stocks) => {
  //   const updatedStocks = stocks.map((stock)=> {
  //     const newPrice = stock.price + 100;
  //     stock.price = +newPrice.toFixed(2)
  //   console.log('this is the growth',stock.price, 'for co', stock.companyName)
  //     // console.log('this is the stock', stock)
  //     return stock
  //   })
  //   //console.log('updatedStocks', updatedStocks)
  //   //loadStocks(updatedStocks)
  //   setTimeout(growth, 5000, updatedStocks);
  // }
    return (
      <div>
        <Header/>

         <div className="row">
          <div className="column">
           <StocksTable data={stocks} limit={limitTo} onLoadMore={this.onLoadMore} addStock={this.addStock}/>
          </div>
          {/* <p>seconds: {this.state.timer}</p> */}

          <div className="column">
            <OwnedStock ownedStocks={ownedStocks}/>
          </div>

        </div>

      </div>
    )
  }
}

