import React from 'react'
import './stockBoard.css'
import singleStock from './priceHistory'

export default function StockTable(props) {
  const {data, limit, onLoadMore, addStock} = props

  return (
    <div>
      <h1 className='boardName'>Stock Board</h1>
        <table>
        <thead className='tableHeader'>
          <tr >
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
              <td ><button className='buyButton' type="button" onClick={() => addStock(item)}>BUY</button></td>
            </tr>
          ))}
          </tbody>
        <button className="loadMore"type="button" onClick={onLoadMore}>Load more </button>
      </table>
    </div>
  )
}


