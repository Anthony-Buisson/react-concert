import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RootNavigator } from "./navigation/RootNavigator";
import store from "./store/store";
import Header from "./navigation/layout/Header";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
          <Header />
        <RootNavigator />
          </HashRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
