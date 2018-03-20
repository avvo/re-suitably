import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import FontAwesome from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";

import {
  AvvoLogoSVG,
  BreadcrumbLinks,
  Button,
  colors,
  Icon,
  Link,
  Subtitle,
  Title
} from "../index.js";

storiesOf("Avvo Logo SVG", module)
  .add("200px wide dark blue", () => {
    return <AvvoLogoSVG width="200px" />;
  })
  .add("500px wide electric blue", () => {
    return <AvvoLogoSVG width="500px" color={colors.electricBlue} />;
  });

storiesOf("Button", module)
  .add("with text", () => {
    return <Button>Hello Button</Button>;
  })
  .add("with some emoji", () => <Button>😀 😎 👍 💯</Button>);

storiesOf("Icons", module)
  .add("Globe icon", () => {
    return <FontAwesome icon="globe" />;
  })
  .add("Phone icon", () => {
    return <Icon icon="phone" />;
  })
  .add("Envelope icon", () => {
    return <Icon icon="envelope" />;
  })
  .add("ChevronUp icon", () => {
    return <Icon icon="chevron-up" />;
  })
  .add("ChevronDown icon", () => {
    return <Icon icon="chevron-down" />;
  })
  .add("ChevronLeft icon", () => {
    return <Icon icon="chevron-left" />;
  })
  .add("ChevronRight icon", () => {
    return <Icon icon="chevron-right" />;
  })
  .add("Person icon", () => {
    return <Icon icon="user" />;
  });

storiesOf("BreadcrumbLinks", module).add("Amos links", () => {
  const amos = process.env.AMOS_BASE_URL;
  const breadcrumbLinks = [
    { url: `${amos}profile/dashboard`, name: "My Avvo" },
    { url: `${amos}profile/impression_stats`, name: "Analytics" }
  ];
  return <BreadcrumbLinks links={breadcrumbLinks} currentPage="Storybook" />;
});
