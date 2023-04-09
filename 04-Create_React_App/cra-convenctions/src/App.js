import React, { Component } from "react";
import Dog from "./Dog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dog />
        <div className="Dog1">His name is Romek!</div>
      </div>
    );
  }
}

export default App;
