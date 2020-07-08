import React from "react";
import AppMinMax from "./hw/5-norm.js";
import MinMax from "./Inputs/minmax/min-max";
import AppLazyInput from "./Inputs/lazy/lazy";

export default class extends React.Component {
  state = {
    inp1: "start",
    inp2: "start other"
  };

  render() {
    return (
      <div>
        <h3>lazy input</h3>
        <p>{this.state.inp1}</p>
        <AppLazyInput
          nativeProps={{ type: "text", className: "some" }}
          value={this.state.inp1}
          onChange={evt => this.setState({ inp1: evt.target.value })}
        />
        <hr />
        <button onClick={evt => this.setState({ inp1: "test" })}>
          Unreal change
        </button>
      </div>
    );
  }
}
