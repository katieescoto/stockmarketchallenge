import React from 'react'
import './stockBoard.css'

export default function ownedStocks(props) {
  const {ownedStocks} = props
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
            {ownedStocks.map(item => (
           <tr key={item.id}>
            <td>{item.stockSymbol}</td>
            <td>{item.companyName}</td>
            <td> ${item.price}/sh</td>
            <td>Shares: 0</td>
            <button type="button" onClick={console.log('sell me')}>SELL</button>
            <td><button type="button" onClick={console.log('delete')}>-</button></td>
          </tr>
        ))}
          </tbody>
        </table>
    </div>
  )
}
