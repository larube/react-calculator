import React from 'react';
import PropTypes from 'prop-types';

import OutputButton from 'components/OutputButton';

const Output = ({ currentOperation, currentResult }) => (
  <div className="screen row">
    <OutputButton className="input-screen" value={currentOperation} />
    <OutputButton className="output-screen" value={currentResult} />
  </div>
);

Output.propTypes = {
  currentOperation: PropTypes.string,
  currentResult: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Output.defaultProps = {
  currentOperation: null,
  currentResult: null,
};

export default Output;
