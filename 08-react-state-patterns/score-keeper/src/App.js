import React, { Component } from "react";
import "./App.css";
import Ball from "./Ball";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={17} />
        <Ball num={33} />
        <Ball num={64} />
        <Ball num={12} />
      </div>
    );
  }
}

export default App;
