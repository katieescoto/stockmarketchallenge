import React from 'react'
import './stockBoard.css'

export default function StockTable(props) {
  const {data, limit, onLoadMore, addStock} = props

  // const growth = (data) => {
  //   let updatedStocks = data.map((stock) => {
  //     let newPrice = stock.price * .10;
  //     stock.price = +newPrice.toFixed(2)
  //     return stock;
  //   })
  //   setTimeout(growth, 2000, updatedStocks)
  // }

  // let growth = (data) => {
  //   const updatedStocks = data.map((stock)=> {
  //     const newPrice = stock.price + 100;
  //     stock.price = +newPrice.toFixed(2)
  //    console.log('this is the growth',stock.price, 'for co', stock.companyName)
  //     return stock
  //   })
  //   setTimeout(growth, 2000, updatedStocks);
  // }

  return (
    <div>
      <h1>Stock Board</h1>
        <table className='stockTable'>
        <thead>
          <tr>
            <th>SYM</th>
            <th>COM</th>
            <th>P/SH</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, limit).map(item => (
            <tr key={item.id}>
              <td>{item.stockSymbol}</td>
              <td>{item.companyName}</td>
              <td> ${item.price}/share</td>
              <td><button type="button" onClick={() => addStock(item)}>BUY</button></td>
            </tr>
          ))}
          </tbody>
        <button type="button" onClick={onLoadMore}>Load more </button>
      </table>
    </div>
  )
}


