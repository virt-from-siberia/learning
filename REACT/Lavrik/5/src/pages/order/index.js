import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import orderModal from "~s/order";
import cartModel from "~s/cart";
import { Link } from "react-router-dom";

@observer
export default class extends React.Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({
      showModal: true
    });
  };
  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  confirmModal = () => {
    this.hideModal();
    this.props.history.push("/done");
    console.log(props.history);
  };

  render() {
    let formFilds = [];

    for (let name in orderModal.formData) {
      let field = orderModal.formData[name];

      formFilds.push(
        <Form.Group key={name} controlId={"order-form-" + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type="text"
            value={field.value}
            onChange={e => orderModal.change(name, e.target.value)}
          />
          {field.valid === null || field.valid ? (
            ""
          ) : (
            <Form.Text className="text-muted">{field.errorText}</Form.Text>
          )}
        </Form.Group>
      );
    }

    return (
      <div>
        <h2>Order</h2>
        <hr />
        {/* TODO: FORM ===================== */}
        <Form>{formFilds}</Form>
        <Link className="btn-warning btn" to="/">
          Back to Cart
        </Link>
        &nbsp;
        <Button
          variant="primary"
          onClick={this.showModal}
          disabled={!orderModal.formValid}
        >
          Apply Order
        </Button>
        {/* TODO: MODAL ===================== */}
        <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Check information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>Total : {cartModel.total}</strong>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.confirmModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
