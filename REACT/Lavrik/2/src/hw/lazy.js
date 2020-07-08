import React from "react";
import PropTypes from "prop-types";

/*

*/

export default class Some extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  };

  state = {
    cnt: this.props.min,
    inputValue: this.props.min
  };

  increase = props => {
    this.set(this.state.cnt + 1);
  };
  decrease = () => {
    this.set(this.state.cnt - 1);
  };

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.setState({
      cnt: cnt,
      inputValue: cnt
    });
  }

  setValue(newStr) {
    this.setState({ inputValue: newStr });
  }

  applyValue = () => {
    let cnt = parseInt(this.state.inputValue);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  };

  checkEnterKey = evt => {
    if (evt.keyCode === 13) {
      this.applyValue();
    }
  };

  render() {
    return (
      <div>
        CNT: {this.state.cnt}
        <br />
        inputValue : {this.state.inputValue}
        <input
          value={this.state.inputValue}
          onChange={evt => this.setValue(evt.target.value)}
          onBlur={this.applyValue}
          onKeyUp={this.checkEnterKey}
        ></input>
        <br />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}
