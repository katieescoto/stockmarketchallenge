import React, { Component } from 'react'
import './navBar.css'

export default class navBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
    }
  }
  render() {
    return (
      <div className="header">
        {/* <h1>Welcome,{this.state.user} </h1> */}

        <p><img alt='logo' src="https://img.icons8.com/windows/32/000000/stocks.png"/></p>
        {/* <form>
          <label>
            Welcome, <input type='text' name='name'/>
            <input type='submit' value='submit'/>
          </label>
        </form> */}
        <div className='portfolio'>
          <h3 className='box'>hi,</h3>
          <h3 className='box'>Funds: ${this.props.funds}</h3>
        </div>

      </div>
    );
  }
}
