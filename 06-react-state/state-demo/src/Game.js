import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 99,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Your Score is: {this.state.score} </h1>
      </div>
    );
  }
}

export default Game;

// Alternate syntax - uses something called the Class Properties proposal
// Babel is taking this non valid JS code and converting it into
// valid JS code where it's basically doing the exact same thing we can see here
// import React, { Component } from "react";

// class Game extends Component {
//     state = {
//         score: 0,
//         gameOver: false,
//       };
//     }
//     render() {
//       return (
//         <div>
//           <h1>Your Score is: {this.state.score} </h1>
//         </div>
//       );
//     }
//   }

//   export default Game;
