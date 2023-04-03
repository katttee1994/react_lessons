class SlotMachine extends React.Component {
  render() {
    console.log(this.props);
    const value1 = this.props.s1;
    const value2 = this.props.s2;
    const value3 = this.props.s3;
    const msg =
      value1 === value2 && value2 === value3 ? "YOU WIN!" : "YOU LOSE!";

    return (
      <div>
        <div>{value1}</div>
        <div>{value2}</div>
        <div>{value3}</div>
        <div>{msg}</div>
      </div>
    );
  }
}
