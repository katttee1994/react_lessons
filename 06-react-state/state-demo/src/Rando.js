import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }
  //   funkcja makeTimer gdzie uzywamy metody setInterval -
  //   polegającej na tym, ze dana czynnosc zostaje powtarzana
  // w okreslonym przez nas czasie az do momentu jej zakonczenia np.
  // mozemh tego uzyc aby co 5 sekund powtorzyc jakies zdanie.
  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default Rando;
