import React from "react";
import PropTypes from "prop-types";
import AppLazyInput from "../lazy";
import styles from "./minmax.module.css";

export default class extends React.PureComponent {
  static defaultProps = {
    onChange: function(cnt) {}
  };

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };
  lazyInput = React.createRef();

  increase = () => {
    this.set(this.props.cnt + 1);
  };

  decrease = () => {
    this.set(this.props.cnt - 1);
  };

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);

    this.props.onChange(cnt);
    return cnt;
  }

  setValue(newStr) {
    this.setState({ inputValue: newStr });
  }

  onChange = e => {
    let cnt = parseInt(e.target.value);
    let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
    if (realCnt.toString() != e.target.value) {
      console.log("hard set value");
      this.lazyInput.current.setValue(realCnt);
    }
  };

  render() {
    console.log("minmax rener");
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <AppLazyInput
          value={this.props.cnt}
          onChange={this.onChange}
          nativeProps={{ type: "text", className: styles.input }}
          ref={this.lazyInput}
        />

        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/
