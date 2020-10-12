import React from 'react'
import './stockBoard.css'

export default function ownedStocks(props) {
  const {ownedStocks, sellStock} = props
  const uniqueStocks = Array.from(new Set(ownedStocks))

  return (
    <div>
      <h1>Owned Stocks</h1>
        <table className='stockTable'>
          <thead>
            <tr>
              <th>SYM</th>
              <th>COM</th>
              <th>P/SH</th>
              <th>NUM SHR</th>
            </tr>
          </thead>
           <tbody>
            {uniqueStocks.map(item => (
            <tr key={item.id}>
              <td>{item.stockSymbol}</td>
              <td>{item.companyName}</td>
              <td> ${item.price}/sh</td>
              <td>Shares: {item.owned}</td>
              <button type="button" onClick={()=> sellStock(item)}>SELL</button>
              <td><button type="button" onClick={console.log('delete')}>-</button></td>
            </tr>
        ))}


          </tbody>
        </table>
    </div>
  )
}
