
import React, { Component } from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import StockBoard from '../stockBoard'
import UserWelcome from '../userWelcome'
import './routes.css'

export default class routes extends Component {
  render() {
    return (
      <div>
          <div className='routeHeader'>
            <img alt='logo' src="https://img.icons8.com/windows/32/000000/stocks.png"/>

              <div>
              <Link className='linkHeader' to='/'>Home</Link>
              <Link className='linkHeader' to='/stockBoard'>Stock Market</Link>
            </div>
          </div>

          <Switch>
            <Route exact path='/' component={UserWelcome} />
            <Route exact path='/stockBoard' component={StockBoard}/>
            <Route path='/welcome' component={UserWelcome}/>
          </Switch>
      </div>
    )
  }
}



