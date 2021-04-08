import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './axios';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/app/NavBar';
import {
  Loader,
} from './components/app/FeedBack';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <Router />
      <Loader />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

