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
    cnt: this.props.min
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
      cnt: cnt
    });
  }

  render() {
    return (
      <div>
        <strong>{this.state.cnt}</strong>
        <br />
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}
