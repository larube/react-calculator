import React from 'react';
import { connect } from 'react-redux';
import ButtonNumber from 'components/ButtonNumber';

import {
  typingButton,
  typingFloatNumber,
  typingOperator,
} from 'containers/actions';

const DOT = '.';

const DigitButtons = ({ onClick }) => (
  <div className="row">
    {[7, 8, 9, 6, 5, 4, 3, 2, 1, 0, DOT].map(value => (
      <ButtonNumber value={value} onClick={onClick} key={value} />
    ))}
  </div>
);

const mapStateToProps = ({ isTypingAFloatNumber, currentOperation }) => ({
  isTypingAFloatNumber,
  currentOperation,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: ({ target: { value } }) => {
    const { isTypingAFloatNumber, currentOperation } = ownProps;

    if (value === DOT && isTypingAFloatNumber) return;
    if (value === DOT) {
      dispatch(typingFloatNumber(true));
    }
    dispatch(typingButton(currentOperation + value));
    dispatch(typingOperator(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DigitButtons);
