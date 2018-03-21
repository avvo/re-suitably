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

const PrimaryButtonLink = styled.a`
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

const SecondaryButtonLink = styled.a`
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


const Button = ({ onClick, href, children, primary }) => {
  const ButtonClass = primary ? PrimaryButtonLink : SecondaryButtonLink
  return (
    <ButtonClass onClick={onClick || identity} href={href}>
      {children}
    </ButtonClass>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  href: null,
  onClick: null,
};

export default Button;
