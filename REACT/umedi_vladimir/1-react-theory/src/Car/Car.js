import React, { Component } from "react";
import "./Car.scss";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index == 0) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const inputClasses = ["input"];

    this.props.name !== ""
      ? inputClasses.push("green")
      : inputClasses.push("red");

    if (this.props.name.length > 4) {
      inputClasses.push("more");
    }

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>
          Year : <strong> {this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(" ")}
        ></input>
        <button onClick={this.props.onChangeTitle}>Click my !</button>
        <button onClick={this.props.onDelite}>Delite</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onDelite: PropTypes.func.isRequired
};

// const Car = props => {};
export default withClass(Car, "car");
