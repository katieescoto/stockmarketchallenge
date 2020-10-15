import React, { Component } from 'react'
import './userForm.css'

export default class userForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      fields: {},
      errors: {}
    }
  }
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

      //Name
      if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
     }

     if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["name"] = "Only letters";
        }
     }
     this.setState({errors: errors});
     return formIsValid;
  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
}

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
