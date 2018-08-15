import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Screen from 'components/Screen';
import DigitButtons from 'containers/DigitButtons';
import OperatorButtons from 'containers/OperatorButtons';
import ComputeButton from 'containers/ComputeButton';
import ResetButton from 'containers/ResetButton';

const Calculator = props => {
  const {
    isTypingFloatNumber,
    currentOperation,
    istypingOperator,
    currentResult,
  } = props;

  return (
    <div>
      <Screen
        currentOperation={currentOperation}
        currentResult={currentResult}
      />
      <div className="row">
        <ResetButton />
        <ComputeButton currentOperation={currentOperation} />
      </div>
      <div className="buttons">
        <DigitButtons
          isTypingAFloatNumber={isTypingFloatNumber}
          currentOperation={currentOperation}
        />
        <OperatorButtons
          currentOperation={currentOperation}
          istypingOperator={istypingOperator}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default compose(
  connect(
    mapStateToProps,
    null
  )
)(Calculator);
