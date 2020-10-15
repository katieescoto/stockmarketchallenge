import React from 'react'
import './stockBoard.css'

export default function ownedStocks(props) {
  const {ownedStocks, sellStock} = props
  const uniqueStocks = Array.from(new Set(ownedStocks))

  return (
    <div>
      <h1 className='boardName'>Portfolio</h1>
        <table className='stockTable'>
          <thead className='tableHeader'>
            <tr>
              <th>SYM</th>
              <th>COM</th>
              <th>P/SH</th>
              <th>OWN</th>
            </tr>
          </thead>
           <tbody>
            {uniqueStocks.map(item => (
            <tr key={item.id}>
              <td>{item.stockSymbol}</td>
              <td>{item.companyName}</td>
              <td> ${item.price}/sh</td>
              <td>x {item.owned}</td>
              <button className='sellButton'type="button" onClick={()=> sellStock(item)}>SELL</button>
              {/* <td><button type="button" onClick={console.log('delete')}>-</button></td> */}
            </tr>
        ))}

          </tbody>
        </table>
    </div>
  )
}
