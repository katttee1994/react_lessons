import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // jezeli chcemy miec dostęp do this.props w konsoli przez console.log - jezeli chcemy zeby zadzialal to musimy dac
    // do super() props czyli super(props)
    // jeżeli chcemy uzyc state to wtedy nie musimy dawac props do super
    //  (ale to profesjonalniej wyglada i moze byc dalej super(props))
    // i kod wyglada tak:
    // super();
    // this.state = { color: 'cyan'};
    // i ponizej zamieniamy return <h1>{this.state.color}
    // ogolnie to zawsze pisz super(props)!!!!!!!!!
  }
  render() {
    return <h1>{this.props.animal}</h1>;
  }
}

export default Demo;
