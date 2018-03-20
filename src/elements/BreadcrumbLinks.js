import React from "react";
import PropTypes from "prop-types";
import colors from "../styles/colors";
import Link from "./Link";
import Icon from "./Icon";

const BreadcrumbLinks = ({ links, currentPage }) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      {links.map(link => (
        <span key={link.name}>
          <Link href={link.url}>{link.name}</Link>
          &nbsp;<Icon
            name="chevron-right"
            style={{ color: colors.grey40 }}
          />&nbsp;
        </span>
      ))}
      {currentPage}
    </div>
  );
};

BreadcrumbLinks.propTypes = {
  links: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default BreadcrumbLinks;
