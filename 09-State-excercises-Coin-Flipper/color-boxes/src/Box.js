import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

class Box extends Component {
  static defaultProps = {
    allColors: ["purple", "magenta", "lilac", "pink"],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("dupa");
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
