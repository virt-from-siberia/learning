import React from "react";
import "./Modal.scss";

export default class Modal extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal}>Open modal</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>I am awesome modal</p>
              <button onClick={this.closeModal}> Close modal</button>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
