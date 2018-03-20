import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import InputBase from './InputBase';
import colors from "../styles/colors";

const Textbox = (props) => {
  const renderProps = Object.assign({}, props, {type: "text"});
  return (<InputBase {...renderProps}>{props.children}</InputBase>);
};

Textbox.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Textbox.defaultProps = {
  defaultValue: '',
  onChange: null,
  placeholder: '',
};

const StyledTextbox = styled(Textbox)`
  display: block;
  width: 100%;
  height: 3.8rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${colors.grey90};
  background-color: ${colors.white};
  border: 1px solid ${colors.grey90};
  transition: border-color ease-in-out .15s;

  &:focus {
    border-color: #66AFE9;
    outline: 0;
  }
  &::placeholder {
    color: rgba(51,51,51,0.4);
  }
  &[disabled],fieldset[disabled] .& {
    cursor: not-allowed;
    background-color: rgba(0,0,0,0.02);
    opacity: 1
  }

  &[readonly] {
      background-color: rgba(0,0,0,0.02);
      cursor: default
  }
`;

export default StyledTextbox;
