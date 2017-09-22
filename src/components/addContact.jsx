import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addPerson } from '../actions';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.addNewPerson = this.addNewPerson.bind(this);
  }
  addNewPerson() {
    const data = {
      id: parseInt(this.idInput.value),
      name: this.nameInput.value,
      url: this.urlInput.value,
      phoneNumber: this.phoneInput.value
    }
    this.props.addPerson(data);
  }
  render() {
    return (
      <div className="addNewContact">
        <input placeholder="enter id" ref={(input) => { this.idInput = input; }} />
        <input placeholder="enter name" ref={(input) => { this.nameInput = input; }} />
        <input placeholder="enter image url" ref={(input) => { this.urlInput = input; }} />
        <input placeholder="enter image url" ref={(input) => { this.phoneInput = input; }} />
        <button onClick={this.addNewPerson}>Add</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { results: state.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPerson }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
