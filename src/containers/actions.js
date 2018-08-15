export const TYPING_BUTTON = 'calculator/TYPING_BUTTON';
export const TYPING_FLOAT_BUTTON = 'calculator/TYPING_FLOAT_BUTTON';
export const TYPING_OPERATOR_BUTTON = 'calculator/TYPING_OPERATOR_BUTTON';
export const TYPING_RESET_BUTTON = 'calculator/TYPING_RESET_BUTTON';
export const TYPING_COMPUTE_BUTTON = 'calculator/TYPING_COMPUTE_BUTTON';

const ERROR = 'ERROR';

export function typingButton(currentOperation) {
  return {
    type: TYPING_BUTTON,
    payload: currentOperation,
  };
}

export function typingFloatNumber(value) {
  return {
    type: TYPING_FLOAT_BUTTON,
    payload: value,
  };
}

export function typingOperator(value) {
  return {
    type: TYPING_OPERATOR_BUTTON,
    payload: value,
  };
}

export function typingCompute(value) {
  return {
    type: TYPING_COMPUTE_BUTTON,
    payload: setResult(value),
  };
}

export function resetComputation() {
  return {
    type: TYPING_RESET_BUTTON,
  };
}

const setResult = operation => {
  let result;
  try {
    /* eslint no-eval: "off" */
    result = eval(operation);
  } catch (e) {
    result = ERROR;
  }
  return result;
};
