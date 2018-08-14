import React, { Component } from 'react';
import ButtonOperator from 'components/ButtonOperator';
import ButtonAction from 'components/ButtonAction';
import Output from 'components/Output';
import ButtonNumber from 'components/ButtonNumber';

const DOT = '.';
const ERROR = 'ERROR';

const initialState = {
  currentOperation: '',
  currentResult: null,
  isTypingAFloatNumber: false,
  isTypingAnOperator: false,
  hasComputedResult: false,
  lastOperator: null,
};

const DigitButtons = ({ onClick }) => (
  <div className="row">
    {[7, 8, 9, 6, 5, 4, 3, 2, 1, 0, DOT].map(value => (
      <ButtonNumber value={value} onClick={onClick} key={value} />
    ))}
  </div>
);

const OperatorButtons = ({ onClick }) => (
  <div className="row">
    {['/', '*', '+', '-'].map(value => (
      <ButtonOperator value={value} onClick={onClick} key={value} />
    ))}
  </div>
);

/* eslint react/no-multi-comp: "off" */
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onClickDigit = this.onClickDigit.bind(this);
    this.onClickOperator = this.onClickOperator.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.onClickCompute = this.onClickCompute.bind(this);
  }

  onClickDigit({ target: { value } }) {
    const {
      currentOperation,
      isTypingAFloatNumber,
      hasComputedResult,
    } = this.state;
    if (value === DOT && isTypingAFloatNumber) return;
    if (value === DOT) {
      this.setState({ isTypingAFloatNumber: true });
    }
    this.setState({
      currentOperation: hasComputedResult ? value : currentOperation + value,
      isTypingAnOperator: false,
      hasComputedResult: false,
      currentResult: null,
    });
  }

  onClickOperator({ target: { value } }) {
    const {
      currentOperation,
      isTypingAnOperator,
      hasComputedResult,
    } = this.state;
    if (isTypingAnOperator) return;
    if (!currentOperation && ['/', '*', '+'].includes(value)) return;
    this.setState({
      currentOperation: hasComputedResult
        ? value
        : `${currentOperation} ${value} `,
      isTypingAFloatNumber: false,
      // seems to be legit to let user types -(-89)
      isTypingAnOperator: value !== '-',
    });
  }

  onClickReset() {
    this.setState(initialState);
  }

  onClickCompute() {
    const { currentOperation } = this.state;
    this.setState({
      currentResult: this.setResult(currentOperation),
      hasComputedResult: true,
    });
  }

  setResult(operation) {
    let result;
    try {
      /* eslint no-eval: "off" */
      result = eval(operation);
    } catch (e) {
      result = ERROR;
    }

    return result;
  }

  render() {
    const { currentOperation, currentResult } = this.state;

    return (
      <div className="container">
        <div className="calculator-title">React Calculator</div>
        <Output
          currentOperation={currentOperation}
          currentResult={currentResult}
        />

        <div className="row">
          <ButtonAction value="C" onClick={this.onClickReset} />
          <ButtonAction value="=" onClick={this.onClickCompute} />
        </div>
        <div className="buttons">
          <DigitButtons onClick={this.onClickDigit} />
          <OperatorButtons onClick={this.onClickOperator} />
        </div>
      </div>
    );
  }
}

export default Calculator;
