import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ButtonAction from 'components/ButtonAction';

import { typingCompute, typingOperator } from 'containers/actions';

const ComputeButton = ({ onClick }) => (
  <ButtonAction value="=" onClick={onClick} />
);

const mapStateToProps = ({ currentOperation }) => ({
  currentOperation,
});

const mapDispatchToProps = (dispatch, { currentOperation }) => ({
  onClick: () => {
    dispatch(typingCompute(currentOperation));
    dispatch(typingOperator(false));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ComputeButton);
