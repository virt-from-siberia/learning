import React, { Component } from "react";
import "./itemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
    warning: false
  };

  onLabelChange = evt => {
    if (evt.target.value === "") {
      this.setState({ warning: true });
    } else {
      this.setState({
        warning: false,
        label: evt.target.value
      });
    }
  };

  onSubmit = evt => {
    evt.preventDefault();
    if (this.state.label !== "") {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ""
      });
    }
  };

  render() {
    const warningText = <p>Input is empty</p>;
    const { warning } = this.state;
    return (
      <React.Fragment>
        <form className="ItemAddForm d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="What need to be done "
            value={this.state.label}
          />
          <button className="btn btn-outline-secondary">Add Item</button>
        </form>
        {warning ? warningText : null}
      </React.Fragment>
    );
  }
}
