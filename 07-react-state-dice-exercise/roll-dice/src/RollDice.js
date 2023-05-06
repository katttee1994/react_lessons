import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    // pick 2 new rolls
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    // wait one second (1000 miliseconds), then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        {/* disabled={this.state.rolling}> ta część kodu powoduje blokadę button tylko gdy rolling = true,
gdybysmy wpisali disabled={true}> to przycisk byłby wyłączony całkowicie co oznacza, ze nie moglibysmy
go klikac*/}
        <button onClick={this.roll} disabled={this.state.rolling}>
          {/* kod ponizej mowi, że jezeli rolling is true to 
        będzie Rolling... a jeżeli false to Roll Dice! */}
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
