import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import './index.css';
import App from './App';

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  config.headers.Authorization = localStorage.getItem('jwt')
  console.log(config)
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
