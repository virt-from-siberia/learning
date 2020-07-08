import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";

function App(props) {
  const { title, hero, nav } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <h2>{hero}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav nav={nav} />
    </div>
  );
}

export default App;
