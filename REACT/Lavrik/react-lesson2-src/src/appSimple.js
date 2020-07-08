import React from "react";
import AppMinMax from "./hw/5-norm.js";
import MinMax from "./Inputs/min-max";

export default class extends React.Component {
  state = {
    products: [
      {
        id: 100,
        title: "Ipnone 200",
        price: 12000,
        rest: 10,
        current: 1
      },
      {
        id: 101,
        title: "Samsung AAZ8",
        price: 22000,
        rest: 5,
        current: 1
      },
      {
        id: 103,
        title: "Nokia 3310",
        price: 5000,
        rest: 2,
        current: 1
      },
      {
        id: 105,
        title: "Huawei ZZ",
        price: 15000,
        rest: 8,
        current: 1
      }
    ],
    formDone: false
  };

  changeCnt(i, cnt) {
    let products = [...this.state.products];
    products[i] = { ...newProducts[i], current: cnt };
    this.setState({ products });
  }

  remove(i) {
    console.log(i);
    let products = [...this.state.products];
    products.splice(i, 1);
    this.setState({ products });
  }

  sendForm = () => {
    this.setState({
      formDone: true
    });
  };

  render() {
    let total = this.state.products.reduce((t, product) => {
      return t + product.current * product.price;
    }, 0);

    let productsRows = this.state.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax
              min={1}
              max={product.rest}
              cnt={product.current}
              onChange={cnt => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <button
              onClick={evt => {
                this.remove(i);
              }}
            >
              X
            </button>
          </td>
        </tr>
      );
    });

    let page = this.state.formDone
      ? showCongrats()
      : showForm(productsRows, total, this.sendForm);

    return <div>{page}</div>;
  }
}

function showForm(productsRows, total, onSend) {
  return (
    <div>
      <h2>Cart</h2>
      <table>
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
      <h2>{total}</h2>
      <hr />
      <button onClick={onSend}>Send</button>
    </div>
  );
}

function showCongrats() {
  return (
    <div>
      <h2>Congatulations your order is process!</h2>
      <p>111</p>
    </div>
  );
}
