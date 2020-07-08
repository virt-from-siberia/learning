import React from "react";
import cartModel from "~s/cart/";
import orderModel from "~s/order/";
import { Link } from "react-router-dom";

export default class extends React.Component {
  render() {
    let postsTmp = [1, 2, 3];
    let links = postsTmp.map(post => {
      return (
        <div key={post}>
          <Link to={"/news/" + post}>Post : {post}</Link>
          <hr />
        </div>
      );
    });
    console.log(orderModel);
    return (
      <div>
        <h2>Congratulations</h2>
        <p>Hi,{orderModel.data.name} !</p>
        <p>your phone,{orderModel.data.phone} !</p>
        <p>your email,{orderModel.data.email} !</p>

        <p>
          Total : <strong>{cartModel.total}</strong>
        </p>
        {links}
        <Link className="btn-warning btn" to="/">
          Exit
        </Link>
      </div>
    );
  }
}
