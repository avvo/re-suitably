import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import ChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import ChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import ChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import ChevronUp from "@fortawesome/fontawesome-free-solid/faChevronUp";
import Download from "@fortawesome/fontawesome-free-solid/faDownload";
import Envelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
import Globe from "@fortawesome/fontawesome-free-solid/faGlobe";
import Phone from "@fortawesome/fontawesome-free-solid/faPhone";
import Sort from "@fortawesome/fontawesome-free-solid/faSort";
import User from "@fortawesome/fontawesome-free-solid/faUser";

const icons = {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Envelope,
  Globe,
  Phone,
  Sort,
  User
};

const Icon = props => <FontAwesomeIcon icon={icons[props.name]} {...props} />;

export default Icon;
