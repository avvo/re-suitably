import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Globe from "@fortawesome/fontawesome-free-solid/faGlobe";
import Phone from "@fortawesome/fontawesome-free-solid/faPhone";
import Envelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
import ChevronUp from "@fortawesome/fontawesome-free-solid/faChevronUp";
import ChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import ChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import ChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import User from "@fortawesome/fontawesome-free-solid/faUser";

const icons = {
  Globe,
  Phone,
  Envelope,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  User
};

const Icon = props => <FontAwesomeIcon icon={icons[props.name]} {...props} />;

export default Icon;
