import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
import Couter_two from "../counter_two/Counter_two";

export default class Counter extends Component {
  state = {
    counter: 0,
    del: 0
  };

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    //JSX:
    return (
      <Auxiliary>
        <h2>Counter : {this.state.counter} </h2>
        <Couter_two />
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </Auxiliary>
    );
    // return [
    //   <h2 key={"1"}>Counter : {this.state.counter} </h2>,
    //   <button onClick={this.addCounter} key={"2"}>
    //     +
    //   </button>,
    //   <button
    //     onClick={() => this.setState({ counter: this.state.counter - 1 })}
    //     key={"3"}
    //   >
    //     -
    //   </button>
    // ];
  }
}
