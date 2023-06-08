import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.height}em`,
            backgroundColor: this.props.color,
          }}
        >
          <button>X</button>
        </div>
      </div>
    );
  }
}

export default Box;
