import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.rolling ? "shaking" : ""
        }`}
        // mozna to tez zapisac
        // className={`Die fas fa-dice-${this.props.face} ${
        // this.props.rolling && "shaking"}`}
      ></i>
    );
  }
}
//  można to też zapisac tak jak ponizej
//   render() {
//     let cls = `fas fa-dice-${this.props.face}`
//     return <i className={cls}></i>;
//   }
// }

export default Die;
