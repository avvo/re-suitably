import React from "react";
import PropTypes from "prop-types";
import colors from "../styles/colors";
import Link from "./Link";
import FontAwesome from "@fortawesome/react-fontawesome";
import AngleRight from "@fortawesome/fontawesome-free-solid/faAngleRight";

const BreadcrumbLinks = ({ links, currentPage }) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      {links.map(link => (
        <span key={link.name}>
          <Link href={link.url}>{link.name}</Link>
          &nbsp;
          <FontAwesome
            icon={AngleRight}
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
