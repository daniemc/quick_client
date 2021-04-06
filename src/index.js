import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/app/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

