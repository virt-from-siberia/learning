import React from "react";
import cartModel from "~s/cart/";

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>Congratulations</h2>
        <p>
          Total : <strong>{cartModel.total}</strong>{" "}
        </p>
      </div>
    );
  }
}
