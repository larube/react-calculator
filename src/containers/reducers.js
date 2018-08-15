import {
  TYPING_BUTTON,
  TYPING_FLOAT_BUTTON,
  TYPING_OPERATOR_BUTTON,
  TYPING_RESET_BUTTON,
  TYPING_COMPUTE_BUTTON,
} from 'containers/actions';

const initialState = {
  currentOperation: '',
  currentResult: null,
  isTypingAFloatNumber: false,
  istypingOperator: false,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPING_BUTTON: {
      const currentOperation = action.payload;
      return {
        ...state,
        currentOperation,
      };
    }

    case TYPING_FLOAT_BUTTON: {
      const isTypingFloatNumber = action.payload;
      return {
        ...state,
        isTypingFloatNumber,
      };
    }

    case TYPING_OPERATOR_BUTTON: {
      const istypingOperator = action.payload;
      return {
        ...state,
        istypingOperator,
      };
    }

    case TYPING_COMPUTE_BUTTON: {
      const currentResult = action.payload;
      return {
        ...state,
        currentResult,
      };
    }

    case TYPING_RESET_BUTTON: {
      return initialState;
    }

    default:
      return state;
  }
};

export default calculatorReducer;
