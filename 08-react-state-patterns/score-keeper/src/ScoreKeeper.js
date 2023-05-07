import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  //   singleKill ma dodawac do pierwotnej wartości (do 0) +1
  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }
  //   tripleKill ma dodawać do pierwotnej wartości +3
  // jezeli wpiszemy to tak jak ponizej to nie bedzie dzialac
  // bo bedzie to traktowane jako w pewien sposob uaktualnienie i komputer
  // wezmie pod uwage ostatnie dzialanie czyli nie bedzie to +1+1+1 tylko pojedyncze
  //   tripleKill() {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 1 });
  //   }
  //   Drugi sposób to tak jak ponizej:
  //   tripleKill() {
  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });
  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });
  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });
  //   }
  incrementScore(curState) {
    return { score: curState.score + 1 };
  }
  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }
  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;
