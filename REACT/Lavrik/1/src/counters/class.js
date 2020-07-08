import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
  };

  state = {
    cnt: 1
  };

  increase = props => {
    const { max } = this.props;
    if (this.state.cnt >= max) {
      return;
    } else {
      this.setState({
        cnt: this.state.cnt + 1
      });
    }
  };

  decrease = props => {
    const { min } = this.props;
    if (this.state.cnt <= min) {
      return;
    } else {
      this.setState({
        cnt: this.state.cnt - 1
      });
    }
  };

  handleInput = evt => {
    const value = +evt.target.value;

    if (isNaN(value) || typeof value == "string") {
      console.log("Should be a number");
    } else {
      this.setState({
        cnt: (this.state.cnt = value)
      });
    }
  };

  render() {
    return (
      <div>
        <strong>{this.state.cnt}</strong>
        <br />
        <button
          onClick={this.increase}
          disabled={this.state.cnt == this.props.max}
        >
          {" "}
          Plus 1
        </button>
        <button
          onClick={this.decrease}
          disabled={this.state.cnt == this.props.min}
        >
          {" "}
          Minus 1
        </button>
        <input type="text" value={this.state.cnt} onChange={this.handleInput} />
      </div>
    );
  }
}
