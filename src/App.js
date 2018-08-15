import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'styles/fonts/fonts.scss';
import 'styles/main.scss';
import store from 'store';
import Calculator from './containers/Calculator';
import MonkeyComputes from './containers/MonkeyComputes';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <div className="calculator-title">React Calculator</div>
      <Calculator />
      <MonkeyComputes />
    </div>
  </Provider>
);

export default hot(module)(App);
