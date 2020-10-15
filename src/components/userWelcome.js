import React from 'react'

import './userWelcome.css'

export default function userWelcome() {
  return (
    <div className='welcomeHeader'>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-main'>Welcome to Priceless Jones stock trading app!</span>
            <span className='heading-sub'>Ready to start trading?</span>
            <span className='heading-sub'>Click on the Stock Market link at the top right.</span>
            <span className='heading-sub'>Enter your name and funds.</span>
            <span className='heading-sub'>And let the trading begin! Have fun!</span>
                {/* <span className='heading-sub'>
                 Let's start trading
                 </span> */}
               {/* <button type='button' onClick={() => console.log('trade')}>
                 <Link to='/stockMarket'></Link>Let's start trading</button> */}
        </h1>
      </div>

    </div>
  )
}
