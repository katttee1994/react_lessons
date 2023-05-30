import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   funkcja handleChange sprawia, że gdy uzytkownik wpisuje cos do formularza,
  // to w konsoli jest to na bieżąco aktualizowane/uzupełniane
  handleChange(evt) {
    this.setState({ username: evt.target.value });
  }
  //   funcka handleSubmin powoduje, ze w alercie pokazuje sie to co napisal wczoesniej uzytkownik
  // oraz dodatkowo ze po zamknieciu alertu przez uzytkownika miejsce do wpisywania robi sie puste
  //   evt.preventDefault(); - powoduje, ze po zamknieciu alertu nie nastepuje odswiezenie strony
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          {/* sprawia ze przy forlumarzu do wypelnienia
            jest jakby opis co mamy wpisac. i piszemy htmlFor bo samo for jest dla js */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;
