import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import './userForm.css'

export default class userForm extends Component {
  render() {
    const {userName, funds, onChange, onSubmit} = this.props

    return (
      <form onSubmit= {() => onSubmit} className='formHeader'>
        <label className='label'>
          Name:
          <input className='inputBox' placeholder='name' name='userName' type='text' value={userName} onChange={onChange}/>
          Funds:
          <input  className='inputBox' placeholder='$$$' name='funds' type='text' value={funds} onChange={onChange}/>
        </label>
      </form>


    )
  }
}
