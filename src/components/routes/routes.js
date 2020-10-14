
import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import StockBoard from '../stockBoard'

export default class routes extends Component {
  render() {
    return (
      <div>

          {/* <Link to='/'>StockBoard</Link> */}
          <Switch>
            <Route exact path='/' component={StockBoard} />
            <Route exact path='/stockBoard' component={StockBoard}/>
          </Switch>

      </div>

    )
  }
}
