import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {RateForm} from './rate.js';
import {GraphMort} from './graphMort.js';
import { MortForm } from './mortForm';

ReactDOM.render(
  <React.StrictMode>
    <MortForm/>
  </React.StrictMode>,
  document.getElementById('root')
);
