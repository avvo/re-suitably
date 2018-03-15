import React, { Component } from "react";

import { AvvoLogoSVG, colors } from "suitably-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <AvvoLogoSVG width="750px" color={colors.semPrimary} />
      </div>
    );
  }
}
