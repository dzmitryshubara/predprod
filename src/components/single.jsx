import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changePerson } from '../actions';

class Single extends Component {
  handleChange() {
    const data = {
      id: parseInt(this.idInput.value),
      name: this.nameInput.value,
      imgUrl: this.urlInput.value,
      phoneNumber: this.phoneInput.value
    };
    this.props.changePerson(data);
  }
  render() {
    const personData = this.props.person;
    const personId = parseInt(this.props.params.elemId);
    const res = personData.filter(elem => elem.id === personId);
    return (
      <div>
        <input
          defaultValue={res[0].id}
          ref={(input) => { this.idInput = input; }} 
        />
        <input
          defaultValue={res[0].name}
          ref={(input) => { this.nameInput = input; }} 
        />
        <input
          defaultValue={res[0].imgUrl}
          ref={(input) => { this.urlInput = input; }}
        />
        <input
          defaultValue={res[0].phoneNumber}
          ref={(input) => { this.phoneInput = input; }}
        />
        <button onClick={this.handleChange.bind(this)}>Submit</button>
      </div>
    );
  }
}

Single.propTypes = {
  person: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    imgUrl: PropTypes.string
  })),
};

function mapStateToProps(state) {
  return { person: state.person };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePerson }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
