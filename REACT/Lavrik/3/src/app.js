import React from "react";
import AppMinMax from "./inputs/minmax/minmax";
import styles from "./app.module.css";
import { Button } from "react-bootstrap";

export default class extends React.Component {
  state = {
    products: getProducts(),
    formDone: false
  };

  changeCnt(i, cnt) {
    let products = [...this.state.products];
    products[i] = { ...products[i], current: cnt };
    this.setState({ products: products });
  }

  remove(i) {
    console.log(i);
    let products = [...this.state.products];
    products.splice(i, 1);
    this.setState({ products: products });
  }
  sendForm = () => {
    this.setState({
      formDone: true
    });
  };

  render() {
    let total = this.state.products.reduce((t, pr) => {
      return t + pr.current * pr.price;
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
              onClick={() => {
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
      ? showFinal()
      : showForm(productsRows, total, this.sendForm);

    return (
      <div className="container">
        {page}
        <hr />
        <Button
          variant="primary"
          onClick={() => {
            this.changeCnt(1, 4);
          }}
        >
          Unreal change cnt
        </Button>
        <input className={styles.input} />
      </div>
    );
  }
}
function showForm(productsRows, total, onSend) {
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
      <h2>Total : {total}</h2>
      <hr />
      <button onClick={onSend} className="btn btn-success">
        Send
      </button>
    </React.Fragment>
  );
}

function showFinal() {
  return (
    <div>
      <hr />
      <h2>Yor order is process!</h2>
    </div>
  );
}

function getProducts() {
  return [
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
      current: 2
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
  ];
}
