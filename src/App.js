import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from 'store';
import Calculator from 'containers/Calculator';
import MonkeyComputes from 'containers/MonkeyComputes';
import 'styles/fonts/fonts.scss';
import 'styles/main.scss';

const App = () => (
  <Provider store={store}>
    <div>
      <Calculator />
      <MonkeyComputes />
    </div>
  </Provider>
);

export default hot(module)(App);
