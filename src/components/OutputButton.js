import React from 'react';
import PropTypes from 'prop-types';

const OutputButton = ({ value }) => <div className="output">{value}</div>;

OutputButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OutputButton.defaultProps = {
  value: null,
};

export default OutputButton;
