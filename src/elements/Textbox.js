import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './InputBase';

const Textbox = (props) => {
  const renderProps = Object.assign({}, props, {type: "text"});
  return (<InputBase {...renderProps}>{props.children}</InputBase>);
};

Checkbox.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  defaultValue: '',
  onChange: null,
  placeholder: '',
};

export default Textbox;
