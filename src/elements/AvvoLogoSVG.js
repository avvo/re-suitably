import React from "react";
import styled, { css } from "styled-components";
import colors from "../styles/colors";
import omit from "ramda/src/omit";

const SvgComponent = props => {
  const styleProps = ["color", "hover", "hoverColor"];
  const passProps = omit(styleProps, props);
  return (
    <svg viewBox="0 0 381.2 111.4" {...passProps}>
      <path d="M339.1 111.4c23.1 0 42.1-18.5 42.1-41.8 0-23.4-19-42-42.1-42-23.3 0-42.3 18.5-42.3 42 .1 23.3 19 41.8 42.3 41.8m-200.7-.3c36.9 0 65.1-45.6 67-82.2h-27.2c-3 23.6-10.6 40.4-20.6 48.8-.8.8-1.3.3-1.3-.3L152.6 29h-26.8l7.2 78c.3 3.2 2.8 4.1 5.4 4.1m88.5 0c36.9 0 65.1-45.6 67-82.2h-27.2c-3 23.6-10.6 40.4-20.6 48.8-.8.8-1.3.3-1.3-.3L241.1 29h-26.8l7.1 78.1c.4 3.1 2.9 4 5.5 4M78.2 36.4c.8-.8 1.6-.6 1.6.3l2.4 31.8H51.5c9.1-13.9 18.8-25.3 26.7-32.1m260.8 51c-9.3 0-16.9-7.6-16.9-17.7s7.6-17.9 16.9-17.9 17.1 7.8 17.1 17.9c0 10.1-7.8 17.7-17.1 17.7M85.3 110.6h29.4L105.6 6.8c-.3-4.3-3.5-5.5-8.9-4.9C60.3 6.3 15.4 66.8 0 110.6h29.6C32 104.3 34.8 98 38 92h45.9l1.4 18.6z" />
    </svg>
  );
};

const StyledSvgComponent = styled(SvgComponent)`
  path {
    fill: ${props => (props.color ? props.color : colors.navy)};
    pointer-events: all;
    ${props =>
      props.hover &&
      css`
        &:hover {
          fill: ${props.hoverColor ? props.hoverColor : colors.electricBlue};
        }
      `};
  }
`;

export default StyledSvgComponent;
