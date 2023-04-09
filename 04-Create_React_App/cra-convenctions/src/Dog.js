import React, { Component } from "react";
import Romek from "./Puppy.jpg";
import "./Dog.css";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>My Dog is cute!</h1>
        <img className="Dog-img" src={Romek} alt="To zdjęcie mojego psa" />
      </div>
    );
  }
}

export default Dog;
