// Zadanie polegajace na wyswietlaniu losowych numerow od 1 do 10. W momencie wypadniecia 7,
// wyswietla sie komunikat o gratulacjach i obrazek
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    // sposób 1 na to zadanie za pomoca if:
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src="https://i.gifer.com/OiU.gif" />
        </div>
      );
    } else {
      msg = <p>You Lose!</p>;
    }

    return (
      <div>
        <h1>Your number is: {num} </h1>
        {/* przy korzystaniu z if dodajemy {msg}, jak ponizej. W innnym wypadku usuwamy to. */}
        {msg}
        {/* sposób 2 - za pomocą && - kod ponizej */}
        {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p> */}
        {/* {num === 7 && <img src="https://i.gifer.com/OiU.gif"/>} */}

        {/* sposób 3 - ternary operator */}
        {/* {num === 7 ? <img src="https://i.gifer.com/OiU.gif"/> : null}*/}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
