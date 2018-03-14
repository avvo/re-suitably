import React, { Component } from "react";

import { colors, Button } from "suitably-react";

export default class App extends Component {
  render() {
    console.log(Button, colors);
    return <Button>Test</Button>;
  }
}
