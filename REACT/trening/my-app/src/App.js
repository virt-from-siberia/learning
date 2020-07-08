import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cntainer from "./container";

export default class App extends Component {
  state = {
    todoData: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  render() {
    const { todoData } = this.state;
    return (
      <div>
        <Cntainer list={todoData} />
      </div>
    );
  }
}
