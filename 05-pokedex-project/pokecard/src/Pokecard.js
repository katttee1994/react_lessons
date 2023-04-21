import React, { Component } from "react";
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// This finction pad two three takes a number. If the number is grater then 999,
// then we don't pad it period and we just return the number. `00${number} - here
// we are taking two zeros, plus the number and then slicing three digits out of that
// and returning the number. Czyli jak mamy liczbe 23 dodajemy do niej 00, wychodzi 0023
// i ucinamy i zostaja nam 3 ostatnie cyfry i wtedy mamy id pokemona

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    // ponizej dajemy odlowanie do linku powyzej i od razu wpisujemy this.props.id co
    // doda to tego lunku id danego pokemona i wygeneruje nam automatycznie tego ktorego chcemy
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name}/>
        {/* alt attribute specifies an alternate text for an image, if the image cannot be displayed. */}
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
