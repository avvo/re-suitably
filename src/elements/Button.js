import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import identity from "ramda/src/identity";
import colors from "../styles/colors";

const baseButtonStyles = css`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  width: 100%;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  ${baseButtonStyles}
  background-color: ${colors.semPrimary};
  border: 1px solid ${colors.semPrimary};
  color: ${colors.white};
  font-family: "Circular, Helvetica, sans-serif";
  &:hover {
    background-color: ${colors.orangeHover};
    border: 1px solid ${colors.orangeHover};
  }

  &:active {
    background-color: ${colors.orangeActive};
    border: 1px solid ${colors.orangeActive};
  }
`;

const SecondaryButton = styled.button`
  ${baseButtonStyles}
  border: 1px solid ${colors.semInfo};
  &:hover {
    color: ${colors.semSecondary};
    box-shadow: ${colors.blue} 0 0 0 1px inset;
    border: 1px solid ${colors.semSecondary};
  }

  &:active {
    color: ${colors.white};
    background-color: ${colors.semSecondary};
  }
`;


const Button = (props) => {
  const ButtonClass = props.primary ? PrimaryButton : SecondaryButton
  const buttonProps = Object.assign({}, props, {children: undefined});
  return (
    <ButtonClass {...buttonProps}>
      {props.children}
    </ButtonClass>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  disabled: false,
  onClick: null,
};

export default Button;
