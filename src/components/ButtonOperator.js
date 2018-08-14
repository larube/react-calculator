import React from 'react';
import PropTypes from 'prop-types';

const ButtonOperator = ({ value, onClick }) => (
  <input type="button" value={value} onClick={onClick} className="operator" />
);

ButtonOperator.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string]).isRequired,
  onClick: PropTypes.func,
};

ButtonOperator.defaultProps = {
  onClick: null,
};

export default ButtonOperator;
