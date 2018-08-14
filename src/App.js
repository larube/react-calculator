import React from 'react';
import { hot } from 'react-hot-loader';
import 'styles/fonts/fonts.scss';
import 'styles/main.scss';
import Calculator from './containers/Calculator';

const App = () => <Calculator />;

export default hot(module)(App);
