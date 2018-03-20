import styled from "styled-components";
import colors from "../styles/colors";

const Link = styled.a`
  color: ${colors.blue};
  text-decoration: none;

  &:hover {
    color: ${colors.navy};
  }
`;

export default Link;
