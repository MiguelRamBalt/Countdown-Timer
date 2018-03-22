import React, { Component } from "react";
import { Header } from "./components";
import { Timer } from "./containers";

class App extends Component {
  render() {
    return [<Header key="Header" />, <Timer key="Timer" />];
  }
}

export default App;
