import React, { Component } from "react";

export default class container extends Component {
  render() {
    const { handler, todoData } = this.props;

    todoData.map((el, index) => {
      return (
        <h1>{}</h1>
      )
    });
    return <div>todoData</div>;
  }
}
