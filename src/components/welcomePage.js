import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'


import 'bootstrap/dist/css/bootstrap.min.css';

export default class welcomePage extends Component {
  constructor(props){
    super(props)
    this.state= {
      show: true
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose (){
    this.setState({ show: false });
  };

  handleShow (){
    this.setState({ show: true });
  };

  render() {
    return(
        <div>
            <ReactBootstrap.Button variant="primary" onClick={this.handleShow}>Launch modal</ReactBootstrap.Button>

            <ReactBootstrap.Modal show={this.state.show} onHide={this.handleClose}>
                <ReactBootstrap.Modal.Header closeButton>
                    <ReactBootstrap.Modal.Title>My Profile</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>
                <ReactBootstrap.Modal.Body>...</ReactBootstrap.Modal.Body>
                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button variant="secondary" onClick={this.handleClose}>Close</ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="primary">Save Changes</ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </div>
    );
}
}
