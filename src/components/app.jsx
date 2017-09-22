import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Link} from 'react-router';

import { filterList, deletePerson } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchName = this.searchName.bind(this);
  }
  searchName() {
    console.log(this.searchInput.value);
    this.props.filterList(this.searchInput.value);
  }
  delete(id) {
    this.props.deletePerson(id);
  }
  render() {
    return (
      <div className="app">
        <div className="app-title">Contact-list</div>
        <input
          className="search-field"
          placeholder="..."
          ref={(input) => { this.searchInput = input }}
          onChange={this.searchName}
        />
        <Link to={'/add-contact'}>
          <button>add contact</button>
        </Link>
        <div className="grid">
        {this.props.person.map( (elem) => {
          return (
            <ul className="person" key={elem.id}>
              <li className="fio">First name: {elem.name}</li>
              <li className="phoneNumber">Phone number: {elem.phoneNumber}</li>
              <img className="personPicture" src={elem.imgUrl} />
              <Link to={`/contact/${elem.id}`}>
                <button>change</button>
              </Link>
              <button onClick={this.delete.bind(this, elem.id)}>delete</button>
            </ul>
          );
        })
        }
      </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { person: state.person.filter( per => per.name.includes(state.filter)) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterList, deletePerson }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
