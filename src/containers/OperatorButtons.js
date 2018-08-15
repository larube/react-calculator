import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ButtonOperator from 'components/ButtonOperator';
import { OPERATORS } from 'utils/math';

import {
  typingButton,
  typingOperator,
  typingFloatNumber,
} from 'containers/actions';

const OperatorButtons = ({ onClick }) => (
  <div className="row">
    {OPERATORS.map(value => (
      <ButtonOperator value={value} onClick={onClick} key={value} />
    ))}
  </div>
);

const mapStateToProps = ({ currentOperation, istypingOperator }) => ({
  currentOperation,
  istypingOperator,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: ({ target: { value } }) => {
    const { currentOperation, istypingOperator } = ownProps;
    if (istypingOperator && value !== '-') return;
    dispatch(typingButton(`${currentOperation} ${value} `));
    // seems to be legit to let user types -(-89)
    dispatch(typingOperator(value !== '-'));
    dispatch(typingFloatNumber(false));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OperatorButtons);
