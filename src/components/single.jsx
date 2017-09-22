import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changePerson } from '../actions';

class Single extends Component {
  handleChange() {
    const data = {
      id: parseInt(this.idInput.value),
      name: this.nameInput.value,
      imgUrl: this.urlInput.value,
      phoneNumber: this.phoneInput.value
    }
    this.props.changePerson(data);
  }
  render() {
    const personData = this.props.person;
    const pathArray = window.location.pathname.split('/');
    const urlId = parseInt(pathArray[2]);
    const res = personData.filter(elem => {
      if (elem.id === urlId) {
        return elem;
      }
    });
    return (
      <div>
        <input defaultValue={res[0].id} ref={(input) => { this.idInput = input; }} />
        <input defaultValue={res[0].name} ref={(input) => { this.nameInput = input; }} />
        <input defaultValue={res[0].imgUrl} ref={(input) => { this.urlInput = input; }} />
        <input defaultValue={res[0].phoneNumber} ref={(input) => { this.phoneInput = input; }} />
        <button onClick= {this.handleChange.bind(this)}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { person: state.person };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePerson }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
