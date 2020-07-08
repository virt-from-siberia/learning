import React from "react";

export default class CaeDetail extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.match.params.name}</h1>
        <p>{this.props.match.params.year}</p>
      </div>
    );
  }
}
