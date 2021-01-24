
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { store } from './store/configurestore';

import './index.css';
import { App } from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/tt_cyfral/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
