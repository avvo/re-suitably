import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './InputBase';

const Checkbox = (props) => {
  const renderProps = Object.assign({}, props, {type: "checkbox"});
  return (<InputBase {...renderProps}>{props.children}</InputBase>);
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  defaultChecked: false,
  onChange: null,
};

export default Checkbox;
