import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Single from './components/single.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import AddContact from './components/addContact.jsx';
import rootReducer from './reducers';

const css = require('./app.css');
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="add-contact" component={AddContact} />
      <Route path="contact/:elemId" component={Single} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
