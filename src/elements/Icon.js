import React from "react";
import FontAwesome from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
import faChevronUp from "@fortawesome/fontawesome-free-solid/faChevronUp";
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import faPerson from "@fortawesome/fontawesome-free-solid/faUser";

const Icon = props => {
  return <FontAwesome icon={props.name} {...props} />;
};

export default Icon;
