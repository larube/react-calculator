import React from 'react';
import PropTypes from 'prop-types';

const ButtonNumber = ({ value, onClick }) => (
  <input type="button" value={value} onClick={onClick} className="digit" />
);

ButtonNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};

ButtonNumber.defaultProps = {
  onClick: null,
};

export default ButtonNumber;
