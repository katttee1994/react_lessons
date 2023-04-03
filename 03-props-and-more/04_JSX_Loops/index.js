class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
        <Friend name="Maciek" hobbies={["Perkusja", "Sport", "Kasia"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
