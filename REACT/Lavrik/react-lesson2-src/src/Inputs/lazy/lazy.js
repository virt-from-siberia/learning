import React from "react";
import PropTypes from "prop-types";

export default class extends React.Component {
  static defaultProps = {
    onChange: function(evt) {},
    nativeProps: {}
  };

  static propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    nativeProps: PropTypes.object
  };

  nativeInput = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    let inp = this.nativeInput.current;

    if (prevProps.value != this.props.value) {
      inp.value = this.props.value;
    }
  }

  checkChange = evt => {
    if (this.props.value.toString() !== evt.target.value) {
      this.props.onChange(evt);
    }
  };

  checkEnterKey = evt => {
    if (evt.keyCode === 13) {
      this.checkChange(evt);
    }
  };

  render() {
    return (
      <input
        {...this.props.nativeProps}
        defaultValue={this.props.value}
        onBlur={this.checkChange}
        onKeyUp={this.checkEnterKey}
        ref={this.nativeInput}
      />
    );
  }
}
