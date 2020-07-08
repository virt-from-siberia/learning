import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      inputText: "",
      buttonText: "button text",
      isButtonText: false,
      counter: 0,
      currentText: "",
      warning: "warning"
    };
  }

  showText = () => {
    console.log("work");
    console.log(this);
    this.setState({
      text: "hi"
    });
  };

  changeInput = event => {
    let inputValue = event.target.value;
    let warning = "";

    if (inputValue.length < 10) {
      warning = "length should be more than 10 characters";
    }

    this.setState({
      inputText: event.target.value,
      warning: warning
    });
  };

  move = event => {
    console.log(event.target.textContent);
  };

  changeButtonText = () => {
    this.setState({
      isButtonText: !this.state.isButtonText
    });
  };

  counterPlus = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  counterReset = () => {
    this.setState({
      counter: 0
    });
  };

  getText = event => {
    console.log(event.target.textContent);
    this.setState({
      currentText: event.target.textContent
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showText}>Push 1</button>
        <input defaultValue={this.state.text} onChange={this.changeInput} />

        <textarea defaultValue={this.state.inputText} />

        <h2>{this.state.warning}</h2>

        <p>{this.state.text}</p>
        <div onMouseMove={this.move}>Lorem</div>
        <h2 onClick={this.changeButtonText}>click my</h2>
        <h2>{this.state.isButtonText ? this.state.buttonText : null}</h2>
        <h1>COUNT : {this.state.counter} </h1>
        <button onClick={this.counterPlus}> + </button>
        <button onClick={this.counterReset}> X </button>
        <hr />
        <h1 onClick={this.getText}>TEXT ONE</h1>
        <h1 onClick={this.getText}>TEXT TWO</h1>
        <h1>{this.state.currentText}</h1>
        <hr />
        <input type="checkbox" defaultChecked={true} />
      </div>
    );
  }
}

export default App;
