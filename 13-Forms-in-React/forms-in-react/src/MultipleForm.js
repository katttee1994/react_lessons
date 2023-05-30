import React, { Component } from "react";

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   funkcja handleChange sprawia, że gdy uzytkownik wpisuje cos do formularza,
  // to w konsoli jest to na bieżąco aktualizowane/uzupełniane
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
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
        <h1>Form w/ Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            // name ponizej musi nazywac sie identycznie jak w this.state
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* placeholder - we used to reserve space for content that soon will appear in a layout. */}
          <input
            type="email"
            // name ponizej musi nazywac sie identycznie jak w this.state
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            // name ponizej musi nazywac sie identycznie jak w this.state
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;

// To co u góry mozna tez zapisac jak ponizej ale to duzo dluzsza wersja
// import React, { Component } from "react";

// class MultipleForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "", email: "", password: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   //   funkcja handleChange sprawia, że gdy uzytkownik wpisuje cos do formularza,
//   // to w konsoli jest to na bieżąco aktualizowane/uzupełniane
//   handleChange(evt) {
//     this.setState({ username: evt.target.value });
//   }
//   handleEmailChange(evt) {
//     this.setState({ email: evt.target.value });
//   }
//   handlePasswordChange(evt) {
//     this.setState({ password: evt.target.value });
//   }
//   //   funcka handleSubmin powoduje, ze w alercie pokazuje sie to co napisal wczoesniej uzytkownik
//   // oraz dodatkowo ze po zamknieciu alertu przez uzytkownika miejsce do wpisywania robi sie puste
//   //   evt.preventDefault(); - powoduje, ze po zamknieciu alertu nie nastepuje odswiezenie strony
//   handleSubmit(evt) {
//     evt.preventDefault();
//     alert(`You typed: ${this.state.username}`);
//     this.setState({ username: "" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Form w/ Multiple Inputs</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           {/* placeholder - we used to reserve space for content that soon will appear in a layout. */}
//           <input
//             type="email"
//             placeholder="email"
//             value={this.state.email}
//             onChange={this.handleEmailChange}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={this.state.password}
//             onChange={this.handlePasswordChange}
//           />
//           <button>Submit!</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MultipleForm;
