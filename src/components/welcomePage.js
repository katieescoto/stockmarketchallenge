import React, { Component } from 'react'

export default class welcomePage extends Component {
  constructor(props){
    super(props)

    this.state= {
      modalState: false
    }
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow (){
    this.setState({ modalState: true });
};
  componentDidMount(){
    this.setState({
      modalState: true
    })
  }

  render() {
    return (
      <div>
        {this.state.modalState ? 'hello' : null}
        <h1>Hello welcome</h1>
        <button type='button'>Let's start trading</button>
      </div>
    )
  }
}
