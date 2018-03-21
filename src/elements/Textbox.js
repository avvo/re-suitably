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
  onChange: PropTypes.func.isRequired,
};

Textbox.defaultProps = {
  defaultValue: '',
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
    border-color: ${colors.textboxBorder};
    outline: 0;
  }
  &::placeholder {
    color: ${colors.textboxPlaceholderColor};
  }
  &[disabled],fieldset[disabled] .& {
    cursor: not-allowed;
    background-color: ${colors.textboxDisabledColor};
    opacity: 1
  }

  &[readonly] {
      background-color: ${colors.textboxDisabledColor};
      cursor: default
  }
`;

export default StyledTextbox;
