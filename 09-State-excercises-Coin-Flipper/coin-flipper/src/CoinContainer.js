import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";
// dajemy nawiasy {choice} bo z helpers.js - choice nie jest defaultowe przy export
class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/2014-P_50th_anniversary_Kennedy_half_dollar_high_relief_reverse.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  //   sposób dłuższy
  //   flipCoin() {
  //     const newCoin = choice(this.props.coins);
  //     this.setState((st) => {
  //       let newState = {
  //         ...st,
  //         currCoin: newCoin,
  //         nFlips: st.nFlips + 1,
  //       };
  //       if (newCoin.side === "heads") {
  //         newState.nHeads += 1;
  //       } else {
  //         newState.nTails += 1;
  //       }
  //       return newState;
  //     });
  //   }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinCantainer">
        <h2>Let's Flip A Coin!</h2>

        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
