import React from "react";

import { storiesOf, addDecorator, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
  selectV2
} from "@storybook/addon-knobs/react";
import backgrounds from "@storybook/addon-backgrounds";
import { withInfo } from "@storybook/addon-info";

import JSXAddon from "storybook-addon-jsx";
import invertObj from "ramda/src/invertObj";

import {
  AvvoLogoSVG,
  BreadcrumbLinks,
  Button,
  ButtonLink,
  Checkbox,
  colors,
  Link,
  Textbox
} from "../index.js";

addDecorator(withKnobs);
setAddon(JSXAddon);

const AvvoLogoSVGStories = storiesOf("Avvo Logo SVG", module)
  .addDecorator(
    backgrounds([
      { name: "Avvo BG", value: colors.bgColor },
      { name: "Blue", value: colors.blue }
    ])
  )
  .addWithJSX("200px wide dark blue with options", () => {
    const fillColor = selectV2("Fill color", colors.avvoPrimary, colors.navy);
    const hoverColor = selectV2(
      "Hover color",
      colors.avvoPrimary,
      colors.electricBlue
    );
    return (
      <AvvoLogoSVG
        width={text("width", "200px")}
        color={fillColor}
        hover={boolean("Hover", true)}
        hoverColor={colors.blue}
      />
    );
  })
  .add("200px wide dark blue with hover effect", () => {
    return <AvvoLogoSVG width="200px" hover />;
  })
  .add("200px wide dark blue with no hover effect", () => {
    return <AvvoLogoSVG width="200px" />;
  })
  .add(
    "500px wide with custom electric blue fill and custom navy hover color",
    () => {
      return (
        <AvvoLogoSVG
          width="500px"
          color={colors.electricBlue}
          hover
          hoverColor={colors.navy}
        />
      );
    }
  )
  .add("500px wide with custom electric blue but no hover", () => {
    return <AvvoLogoSVG width="500px" color={colors.electricBlue} />;
  });

storiesOf("Button", module)
  .add("with text", () => {
    return (
      <Button primary={boolean("Primary", true)}>
        {text("Button Text", "React button")}
      </Button>
    );
  })
  .add("primary button", () => (
    <Button primary onClick={action("button-click")}>
      {text("Button Text", "React button")}
    </Button>
  ))
  .add("button with an id and class", () => (
    <Button id="foo" className="bar">
      Hello Button
    </Button>
  ))
  .add("disabled button", () => (
    <Button disabled onClick={action("button-click")}>
      Disabled button
    </Button>
  ));

storiesOf("ButtonLink", module)
  .add("default href", () => <ButtonLink>Hi button</ButtonLink>)
  .add("with a custom href", () => <ButtonLink href="/">Go home</ButtonLink>)
  .add("primary ButtonLink", () => (
    <ButtonLink primary>Primary Button</ButtonLink>
  ))
  .add("disabled ButtonLink", () => (
    <ButtonLink disabled onClick={action("buttonlink-click")}>
      disabled Button
    </ButtonLink>
  ));

storiesOf("Checkbox", module)
  .add("unchecked", () => <Checkbox onChange={action("checkbox-click")} />)
  .add("default checked", () => (
    <Checkbox defaultChecked={true} onChange={action("checkbox-click")} />
  ));

storiesOf("Textbox", module)
  .add("with a placeholder", () => (
    <Textbox placeholder="Insert text here" onChange={action("text-change")} />
  ))
  .add("with default text", () => (
    <Textbox defaultValue="Initial text" onChange={action("text-change")} />
  ));

storiesOf("BreadcrumbLinks", module).add("Amos links", () => {
  const amos = process.env.AMOS_BASE_URL;
  const breadcrumbLinks = [
    { url: `${amos}profile/dashboard`, name: "My Avvo" },
    { url: `${amos}profile/impression_stats`, name: "Analytics" }
  ];
  return <BreadcrumbLinks links={breadcrumbLinks} currentPage="Storybook" />;
});
