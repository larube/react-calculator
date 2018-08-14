import React from 'react';
import PropTypes from 'prop-types';

const ButtonAction = ({ value, onClick }) => (
  <input type="button" value={value} onClick={onClick} className="action" />
);

ButtonAction.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonAction.defaultProps = {
  onClick: null,
};

export default ButtonAction;
