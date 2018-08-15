import { createStore } from 'redux';
import calculatorReducer from 'containers/reducers';

const store = createStore(calculatorReducer);

export default store;
