import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Введите значение",
      name: "",
      age: "Введите значение"
    };
  }

  myInput = evt => {
    console.log(evt.target.name);
    if (evt.target.value === "") {
      this.setState({
        [evt.target.name]: "Введите значение"
      });
    } else {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  };

  onSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.myInput} name="text" />
          <input type="number" name="age" onChange={this. } />
          <p> TEXT : {this.state.text}</p>
          <p> AGE : {this.state.age}</p>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
