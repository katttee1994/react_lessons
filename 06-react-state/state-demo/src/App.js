import React, { Component } from "react";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Rando ma generowac losową liczbe. Ponizej w maxNum
        wspisujemy jaka ma byc maksymalna liczba */}
        <Rando maxNum={7} />
      </div>
    );
  }
}

export default App;
