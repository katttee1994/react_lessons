class Friend extends React.Component {
    render() {
      // poniżej jest object destructuring assignment. Dzięki takiemu zapisowi, 
      // nie musimy już ponizej wpisywac np. this.props.name tylko same name piszemy
      const {name, hobbies} = this.props;
      return (
      <div>
        <h1>{name}</h1>
        <ul>
         
          {/* {<li>Singing</li>
          <li>Dancing</li>} */} 
          {/* to co powyzej tworzy nam liste z podpunktami (kropkami)mozemy rowniez zapisac za pomocą map */}
          {hobbies.map(hobbies => <li>{hobbies}</li>)}
          {/* w kodzie powyzej po znaku => wspisujemy cokolwiek. 
          Moze to byc np tylko h i potem to samo wpisyjemy w <li>{hobbies}</li>  */}
        </ul>
      </div>
      )
    }
  }