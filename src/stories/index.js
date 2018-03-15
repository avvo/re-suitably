import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { AvvoLogoSVG, Button, colors } from "../index.js";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => {
    return <Button>Hello Button</Button>;
  })
  .add("with some emoji", () => <Button>😀 😎 👍 💯</Button>);

storiesOf("Avvo Logo SVG", module)
  .add("200px wide dark blue", () => {
    return <AvvoLogoSVG width="200px" />;
  })
  .add("500px wide electric blue", () => {
    console.log(colors);
    return <AvvoLogoSVG width="500px" color={colors.electricBlue} />;
  });
