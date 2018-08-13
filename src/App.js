import React from 'react';
import { hot } from 'react-hot-loader';
import './styles/main.css';
import Calculator from './containers/Calculator';

const App = () => <Calculator />;

export default hot(module)(App);
