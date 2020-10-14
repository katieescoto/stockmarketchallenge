import React from 'react'
import {Link} from 'react-router-dom'
import './userWelcome.css'

export default function userWelcome() {
  return (
    <div className='welcomeHeader'>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-main'>Stock Market</span>
                {/* <span className='heading-sub'>
                 Let's start trading
                 </span> */}
               <button type='button' onClick={() => console.log('trade')}>
                 <Link to='/stockMarket'></Link>Let's start trading</button>
        </h1>
      </div>

    </div>
  )
}
