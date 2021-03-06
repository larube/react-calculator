import React from 'react';
import { connect } from 'react-redux';
import ButtonAction from 'components/ButtonAction';

import { resetComputation } from 'containers/actions';

const ResetButton = ({ onClick }) => (
  <ButtonAction value="C" onClick={onClick} />
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(resetComputation()),
});

export default connect(
  null,
  mapDispatchToProps
)(ResetButton);
