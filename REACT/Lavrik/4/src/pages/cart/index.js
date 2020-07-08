import React from "react";
import PropTypes from "prop-types";
import AppMinMax from "~c/inputs/minmax/";
import cartModel from "~s/cart/";
import router from "~s/router/";
import { observer } from "mobx-react";

export default
@observer
class extends React.Component {
  render() {
    let productsRows = cartModel.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={cnt => cartModel.change(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <button
              onClick={() => {
                cartModel.remove(i);
              }}
            >
              X
            </button>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <h2>Cart</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Count</td>
              <td>Total</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>{productsRows}</tbody>
        </table>
        <h2>Total : {cartModel.total}</h2>
        <hr />

        <button
          onClick={() => router.moveTo("order")}
          className="btn btn-success "
        >
          Send
        </button>
      </React.Fragment>
    );
  }
}
