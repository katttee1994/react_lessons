class App extends React.Component {
  render() {
    return (
      <div>
        <SlotMachine s1="y" s2="y" s3="z" />
        <SlotMachine s1="y" s2="y" s3="y" />
        <SlotMachine s1="x" s2="y" s3="z" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
