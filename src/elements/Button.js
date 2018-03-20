import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import identity from "ramda/src/identity";
import colors from "../styles/colors";

const ButtonLink = styled.a`
  border: 1px solid ${colors.semInfo};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  width: 100%;
  color: ${colors.semInfo};
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;

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

const Button = ({ onClick, href, children }) => (
  <ButtonLink onClick={onClick || identity} href={href}>
    {children}
  </ButtonLink>
);

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default Button;
