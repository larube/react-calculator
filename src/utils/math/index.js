import { times, partial, zip, dropLast, flatten, reduce } from 'ramda';

const ERROR = 'ERROR';
export const OPERATORS = ['/', '*', '+', '-'];

export function evalComputation(operation) {
  let result;
  try {
    /* eslint no-eval: "off" */
    result = eval(operation);
  } catch (e) {
    result = ERROR;
  }
  return result;
}

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomOperator = () => {
  const randomIndex = getRandomInt(0, OPERATORS.length);
  return OPERATORS[randomIndex];
};

export function randomCompute() {
  const randomNumberOfParameters = getRandomInt(3, 8);

  const randomNumbers = times(
    partial(getRandomInt, [0, 1000]),
    randomNumberOfParameters
  );

  const randomOperators = times(getRandomOperator, randomNumberOfParameters);

  // remove last element, it is an operator, we want a valid computation
  const computation = dropLast(1, flatten(zip(randomNumbers, randomOperators)));

  return reduce((acc, value) => acc + value, '', computation);
}
