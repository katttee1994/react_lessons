// Co sie stanie gdy wywolamy class Hello dwa razy i w jednym nie bedzie from? Wyswietli nam Hello George from !!!!
class App extends React.Component {
  render() {
    return (
      <div> 
        <Hello to="Ringo" 
        from="Paul" 
        bangs={4}
        />
        <Hello to="George" 
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));