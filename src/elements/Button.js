import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import identity from "ramda/src/identity";
import colors from "../styles/colors";

const ButtonLink = styled.a`
  border: 1px solid ${props => props.theme.blue};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  width: 100%;
  color: ${props => props.theme.blue};
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.darkBlue};
    box-shadow: ${colors.blue} 0 0 0 1px inset;
    border: 1px solid ${props => props.theme.darkBlue};
  }

  &:active {
    color: ${colors.white};
    background-color: ${props => props.theme.darkBlue};
  }
`;

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    href: PropTypes.string
  };

  render() {
    const { onClick, href, children } = this.props;

    return (
      <ButtonLink onClick={onClick || identity} href={href}>
        {children}
      </ButtonLink>
    );
  }
}

export default Button;
