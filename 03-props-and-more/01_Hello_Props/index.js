class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1, 2, 3, 4, 5]}
          bangs={4}
        />
        {/* ten bangs powyzej uzyty jest w hello.js i sluzy do powtorzenia 4 x "!" */}
        <Hello
          to="Mike"
          from="Kate"
          num={3}
          data={[1, 2, 3, 4, 5]}
          bangs={5}
          img="https://images.unsplash.com/photo-1561356306-4e7ba12fac92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80"
        />
        {/* mozemy to zapysywac na dwa sposoby, albo w jednej linijce, albo w kilku jak powyzej */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
