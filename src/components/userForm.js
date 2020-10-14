import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class userForm extends Component {
  render() {
    const {userName, funds, onChange, onSubmit} = this.props

    return (
      <form onSubmit= {() => onSubmit}>
        <label>
          Name:
          <input placeholder='name' name='userName' type='text' value={userName} onChange={onChange}/>
          Funds:
          <input placeholder='$$$' name='funds' type='text' value={funds} onChange={onChange}/>
        </label>

        <button type='button'>
          <Link to='/stockBoard'>
          </Link>Let's trade
        </button>

      </form>


    )
  }
}
