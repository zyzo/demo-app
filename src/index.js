
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './_db/firebase.init';

import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
