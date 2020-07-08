import React from "react";
import PropTypes from "prop-types";

export default class Some extends React.Component {
  static defaultProps = {
    onChange: function(cnt) {
      console.log(cnt);
    }
  };

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  state = {
    inputValue: this.props.cnt
  };

  increase = props => {
    this.set(this.props.cnt + 1);
  };
  decrease = () => {
    this.set(this.props.cnt - 1);
  };

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.setState({
      inputValue: cnt
    });

    //КАК ТО ПЕРЕДАТЬ РОДИТЕЛЮ ЧТО СТЕ ОБНОВИЛСЯ
    this.props.onChange(cnt);
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
